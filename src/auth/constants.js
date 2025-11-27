export const AUTH_DOMAIN = process.env.REACT_APP_AUTH_URL || "https://auth.codeup.in";

export const SILENT_SSO_URL = `${AUTH_DOMAIN}/sso/silent-refresh`;
export const GOOGLE_LOGIN_URL = `${AUTH_DOMAIN}/auth/google`;
export const REFRESH_URL = `${AUTH_DOMAIN}/token/refresh`;
export const LOGOUT_URL = `${AUTH_DOMAIN}/auth/logout`;
