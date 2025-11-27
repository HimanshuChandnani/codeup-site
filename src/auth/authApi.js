import { REFRESH_URL, LOGOUT_URL } from "./constants";

export async function refreshAccessToken() {
    try {
        const res = await fetch(REFRESH_URL, {
            method: "GET",
            credentials: "include", // IMPORTANT to send cookies
        });

        if (!res.ok) return null;

        return await res.json(); // { accessToken, user }
    } catch (e) {
        return null;
    }
}

export async function logoutServer() {
    try {
        await fetch(LOGOUT_URL, {
            method: "POST",
            credentials: "include",
        });
    } catch (err) {}
}
