import { useEffect, useRef, useState } from "react";
import { CodeupButton } from "../StyledComponents/style";
import Wrapper from "./style";
import { useNavigate } from "react-router-dom";

export const signOut = () => {
    localStorage.removeItem("googleUser");
    localStorage.removeItem("authToken");
    window.location.reload();
};

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem("googleUser"));
    const token = localStorage.getItem("authToken");
    return user && token ? { user, token } : null;
};

const GoogleSignInButton = ({ onSignIn, type = "codeup" }) => {
    const [user, setUser] = useState(getUser()?.user || null);
    const [googleClient, setGoogleClient] = useState(null);
    const navigate = useNavigate();
    const redirectURLRef = useRef();

    const handleCodeResponse = async (response) => {
        console.log("Authorization Code:", response.code);
        try {
            const res = await fetch("https://backend-auth-eosin.vercel.app/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: response.code }),
            });
            if (!res.ok) throw new Error("Backend authentication failed");
            const data = await res.json();

            localStorage.setItem("googleUser", JSON.stringify(data.user));
            localStorage.setItem("authToken", data.token);
            setUser(data.user);

            if (typeof redirectURLRef.current == "string") {
                console.log(redirectURLRef.current);
                navigate(redirectURLRef.current);
            }

            if (onSignIn) {
                onSignIn(data.user);
            }
            window.dispatchEvent(new Event("userUpdate"));
        } catch (error) {
            console.error("Error authenticating with backend:", error);
        }
    };

    useEffect(() => {
        if (user) return;

        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = () => {
            // Initialize the authorization code client
            const client = window.google.accounts.oauth2.initCodeClient({
                client_id: "66449176523-brfmp9k38luah1vp9r6fns50831l2ke9.apps.googleusercontent.com",
                scope: "email profile openid",
                ux_mode: "popup",
                callback: handleCodeResponse,
            });
            setGoogleClient(client);
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [user]);

    if (user) return null;

    const handleSignInClick = (redirect) => {
        if (googleClient) {
            if (redirect) redirectURLRef.current = redirect;
            googleClient.requestCode();
        } else {
            console.error("Google client not initialized yet.");
        }
    };

    window.signin = handleSignInClick;

    return (
        <>
            {type === "codeup" ? (
                <CodeupButton onClick={handleSignInClick} style={{ overflow: "hidden", position: "relative" }}>
                    Sign in
                </CodeupButton>
            ) : (
                <Wrapper type="button" onClick={handleSignInClick}>
                    <svg viewBox="-3 0 262 262" preserveAspectRatio="xMidYMid" fill="#000000" width={20} height={20} className="me-2">
                        <g id="SVGRepo_iconCarrier">
                            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path>
                            <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path>
                            <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path>
                            <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path>
                        </g>
                    </svg>
                    Google
                </Wrapper>
            )}
        </>
    );
};

export default GoogleSignInButton;
