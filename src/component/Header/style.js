import styled from "styled-components";

const Wrapper = styled.header`
    width: 100%;
    background-color: ${(props) => (props.theme === "blur" ? "#0b22398a" : "#0B2239")};
    backdrop-filter: blur(5px);
    z-index: 2;
    position: fixed;
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
        color: ${(props) => (props.theme === "light" ? "#000 !important" : "#fff !important")};
        font-weight: 600;
        cursor: pointer;
        position: relative;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin: 0 15px;
        display: flex;
        justify-content: center;
        &:hover {
            color: ${(props) => (props.theme === "light" ? "#0b2239 !important" : "#ddd !important")};
        }
        &:not(.no):before {
            content: "";
            position: absolute;
            width: 0%;
            bottom: -2px;
            background-color: ${(props) => (props.theme === "light" ? "#0b2239" : "#fff")};
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
        filter: invert(1);
    }

    .dropdown {
        a {
            color: white !important;
            text-decoration: none;
        }

        .dropdown-menu {
            background-color: #0b22398a;
            padding: 0;
            left: -5px;
            backdrop-filter: blur(40px);
            border-radius: 5px;
            left: unset;
            li a {
                padding: 10px 20px !important;
                color: #ffffffd4 !important;
                display: inline-block;

                &:hover {
                    /* background-color: #ffffff10; */
                    color: white !important;
                }

                a {
                    &:hover {
                    }
                }
            }
        }
    }
`;

export default Wrapper;
