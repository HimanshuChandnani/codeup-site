"use client";

import React, { createContext, useEffect, useState, useCallback } from "react";
import { SILENT_SSO_URL, GOOGLE_LOGIN_URL } from "./constants";
import { refreshAccessToken, logoutServer } from "./authApi";
import { configureApiClient } from "./apiClient";

export const AuthContext = createContext(null);

// Get token from localStorage (instant)
function getInitialToken() {
    return localStorage.getItem("accessToken") || null;
}

// Get cached user from localStorage (instant)
function getInitialUser() {
    try {
        const raw = localStorage.getItem("user");
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

export default function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(getInitialToken());
    const [user, setUser] = useState(getInitialUser());
    const [loading, setLoading] = useState(true);

    // Store token in memory + localStorage
    const storeToken = (token) => {
        setAccessToken(token);
        if (token) localStorage.setItem("accessToken", token);
        else localStorage.removeItem("accessToken");
    };

    // Store user in memory + localStorage
    const storeUser = (userObj) => {
        setUser(userObj);
        if (userObj) localStorage.setItem("user", JSON.stringify(userObj));
        else localStorage.removeItem("user");
    };

    // Login: redirect to AUTH DOMAIN
    const login = () => {
        const redirect = window.location.origin;
        const height = 600;
        const width = 500;
        const left = (window.screen.availWidth - width) / 2;
        const top = (window.screen.availHeight - height) / 2;

        const popup = window.open(`${GOOGLE_LOGIN_URL}?redirect=${redirect}`, "popup", `width=${width},height=${height},top=${top},left=${left}`);
        if (!popup) return alert("Popup blocked! Enable popups to sign in.");

        const handler = (event) => {
            if (!event.data?.ok) return;

            window.removeEventListener("message", handler);
            popup.close();

            // force reload silent-refresh iframe
            const iframe = document.querySelector("#silent-sso-iframe");
            if (iframe) iframe.src = SILENT_SSO_URL;
        };

        window.addEventListener("message", handler);
    };

    // Logout fully (server + client)
    const logout = async () => {
        await logoutServer();
        storeToken(null);
        storeUser(null);
    };

    // Silent SSO on startup (iframe)
    const iframeRef = React.useRef(null);

    useEffect(() => {
        const iframe = document.createElement("iframe");
        iframe.id = "silent-sso-iframe";
        iframe.src = SILENT_SSO_URL;
        iframe.style.display = "none";
        document.body.appendChild(iframe);

        iframeRef.current = iframe;

        const handler = (event) => {
            if (!event.data) return;

            // SSO success
            if (event.data.token) {
                storeToken(event.data.token);
                if (event.data.user) storeUser(event.data.user);
                setLoading(false);
            }

            // Not logged in anywhere
            if (event.data.noSession) {
                setLoading(false);
                if (user) logout();
            }
        };

        window.addEventListener("message", handler);

        return () => {
            window.removeEventListener("message", handler);
            iframe.remove();
        };
    }, []);

    const refresh = useCallback(async () => {
        await refreshAccessToken();

        if (iframeRef.current) {
            iframeRef.current.src = SILENT_SSO_URL;
        }

        const newToken = await new Promise((resolve) => {
            const handler = (event) => {
                if (event.data?.token) {
                    window.removeEventListener("message", handler);
                    resolve(event.data.token);
                }
            };
            window.addEventListener("message", handler);
        });

        storeToken(newToken);

        return newToken;
    }, []);

    useEffect(() => {
        configureApiClient({
            getToken: () => accessToken,
            refreshToken: refresh,
            logout: logout,
        });
    }, [accessToken, refresh, logout]);

    const value = {
        user,
        accessToken,
        loading,
        login,
        logout,
        refresh,
        setUser: storeUser,
        setAccessToken: storeToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
