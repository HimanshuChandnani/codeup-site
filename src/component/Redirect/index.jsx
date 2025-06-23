import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirect = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.has("summer-internship")) {
            navigate("/summer-internship", { replace: true });
        }
    }, [location, navigate]);

    return <>{children}</>;
};

export default Redirect;
