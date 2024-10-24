import styled from "styled-components";

const Wrapper = styled.header`
    width: 100%;
    background-color: #0b22398a;
    backdrop-filter: blur(5px);
    z-index: ${(props) => (props.hide === "true" ? 1 : 2)};
    position: ${(props) => (props.hide === "true" ? "unset" : "fixed")};
    opacity: ${(props) => (props.hide === "true" ? "0" : "1")};
    box-shadow: 0 0 5px 1px #ffffff26;

    /* .blur-bg {
        background-color: #0b2239 !important;
        width: 100%;
        height: 100%;
        position: absolute;
    } */

    .logo {
        width: 150px;
    }
    @media screen and (width <= 446px) {
        .logo {
            width: 120px;
        }
    }

    .contaner,
    .bottomp,
    .navbar-toggler {
        transition: 0.2s;
    }

    .nav-link {
        color: white !important;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin: 0 15px;
        display: flex;
        justify-content: center;
        &:hover {
            color: #ddd !important;
        }
        &:before {
            content: "";
            position: absolute;
            width: 0%;
            bottom: -8px;
            background-color: white;
            height: 3px;
            transition: 0.2s;
        }
        &:hover::before,
        &.active::before {
            width: 100%;
        }
    }

    .custom-nav {
        min-height: 100vh;
        position: fixed;
        top: 0;
        right: -220px;
        background-color: #0b2239;
        padding: 20px 30px;
        z-index: 5;
        box-shadow: 0 0 20px #00000042;
        text-align: left;
        width: 200px;
    }
    .custom-nav li {
        margin: 10px 0;
    }
    .close {
        margin: 3px 0;
        float: none;
        padding: 2px;
        margin-left: auto;
        display: block;
        color: white;
    }
`;

export default Wrapper;
