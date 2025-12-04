import { api } from "./apiClient";
import { REFRESH_URL, LOGOUT_URL } from "./constants";

export async function refreshAccessToken() {
    try {
        await api.get(REFRESH_URL, {
            withCredentials: true,
            skipAuth: true,
        });
    } catch {}
    return true;
}

export async function logoutServer() {
    try {
        await api.post(LOGOUT_URL, null, {
            withCredentials: true,
            skipAuth: true,
        });
    } catch (err) {}
}
