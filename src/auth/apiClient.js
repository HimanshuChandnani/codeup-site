import axios from "axios";

let getAccessToken = () => null;
let refreshAccessToken = async () => null;
let onLogout = () => {};

export function configureApiClient({ getToken, refreshToken, logout }) {
    getAccessToken = getToken;
    refreshAccessToken = refreshToken;
    onLogout = logout;
}

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve(token)));
    failedQueue = [];
};

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// --- REQUEST INTERCEPTOR ---
api.interceptors.request.use(
    (config) => {
        if (!config.skipAuth) {
            const token = getAccessToken();
            if (token) config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// --- RESPONSE INTERCEPTOR (401 auto-refresh + retry) ---
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status !== 401 || originalRequest._retry || originalRequest.skipAuth) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            })
                .then((newToken) => {
                    originalRequest.headers.Authorization = "Bearer " + newToken;
                    return api(originalRequest);
                })
                .catch((err) => Promise.reject(err));
        }

        isRefreshing = true;

        try {
            const newToken = await refreshAccessToken();

            if (!newToken) {
                processQueue(new Error("Refresh Failed"));
                onLogout();
                return Promise.reject(error);
            }

            processQueue(null, newToken);

            originalRequest.headers.Authorization = "Bearer " + newToken;
            return api(originalRequest);
        } catch (err) {
            processQueue(err, null);
            onLogout();
            return Promise.reject(error);
        } finally {
            isRefreshing = false;
        }
    }
);
