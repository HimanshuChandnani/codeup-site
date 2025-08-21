import React, { useEffect, useState } from "react";
import NavbarItem from "../NavbarItem";
import $ from "jquery";
import GoogleSignInButton, { getUser, signOut } from "../GoogleSigninButton";
import Wrapper from "./style";
import { useNavigate } from "react-router-dom";

const Navbar = ({ itemList = "", theme = "dark" }) => {
    const [user, setUser] = useState(getUser()?.user || null);
    const navigate = useNavigate();

    let navItem = [];
    for (let i of itemList) {
        navItem.push(<NavbarItem key={i.value} value={i.value} scrollToElem={i.scrollToElem} func={i.func} customClass={i.customClass} element={i.element} dropdown={i.dropdown} items={i.items} />);
    }

    // Navbar
    let navbar;
    $(document).ready(() => (navbar = $("#collapsibleNavbar")));
    function navbar_toggle() {
        navbar.addClass("custom-nav").addClass("show").animate({
            right: "0px",
        });
    }
    function navbar_hide() {
        navbar
            .animate({
                right: "-220px",
            })
            .removeClass("custom-nav")
            .removeClass("show");
    }

    useEffect(() => {
        if (user && user.role.includes("admin")) {
            navigate("/admin");
        }
    }, [user]);

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedUser = getUser()?.user || null;
            setUser(updatedUser);
        };

        window.addEventListener("userUpdate", handleStorageChange);

        return () => {
            window.removeEventListener("userUpdate", handleStorageChange);
        };
    }, []);

    return (
        <Wrapper className="navbar navbar-expand-lg navbar-dark float-end text-end justify-content-end p-0">
            {itemList.length <= 1 ? (
                <ul className="navbar-nav">
                    {navItem}
                    {/* <li className="nav-item"> */}
                    {user ? (
                        <li className="dropdown nav-link bottomp p-0 me-0 pb-2 no">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <img src={user.picture} className="rounded-circle object-fit-cover ms-1" alt="Profile" height="40" width="40" />
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu" style={{ position: "absolute" }}>
                                <li>
                                    {/* <a href="#" onClick={(e) => e.preventDefault()}>
                                        Profile
                                    </a>
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        Settings
                                    </a> */}
                                    <a href="#" onClick={signOut}>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ) : (
                        <li className="pl-lg-3 nav-link pb-2 pt-0 me-0 no">
                            <GoogleSignInButton onSignIn={setUser} />
                        </li>
                    )}
                    {/* </li> */}
                </ul>
            ) : (
                <>
                    <button className="navbar-toggler mb-3" onClick={navbar_toggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <div className="d-lg-none d-block">
                            <button className="btn btn-close close" style={{ backgroundColor: "unset !important" }} onClick={navbar_hide}></button>
                        </div>
                        <ul className="navbar-nav">
                            {navItem}
                            {/* <li className="nav-item"> */}
                            {user ? (
                                <li className="dropdown nav-link bottomp p-0 pb-2 me-0 no">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <img src={user.picture} className="rounded-circle object-fit-cover ms-1" alt="Profile" height="40" width="40" />
                                        <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu" style={{ position: "absolute" }}>
                                        <li>
                                            {/* <a href="#" onClick={(e) => e.preventDefault()}>
                                                Profile
                                            </a>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                Settings
                                            </a> */}
                                            <a href="#" onClick={signOut}>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="pl-lg-3 nav-link pb-2 pt-0 me-0 no">
                                    <GoogleSignInButton onSignIn={setUser} />
                                </li>
                            )}
                            {/* </li> */}
                        </ul>
                    </div>
                </>
            )}
        </Wrapper>
    );
};

export default Navbar;
