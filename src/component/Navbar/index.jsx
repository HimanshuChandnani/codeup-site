import React from "react";
import NavbarItem from "../NavbarItem";
import $ from "jquery";

const Navbar = ({ itemList = "", theme = "dark" }) => {
    let navItem = [];
    for (let i of itemList) {
        navItem.push(<NavbarItem key={i.value} value={i.value} scrollToElem={i.scrollToElem} func={i.func} customClass={i.customClass} element={i.element} />);
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

    return (
        <nav className="navbar navbar-expand-lg navbar-dark float-right text-right justify-content-end">
            <button className="navbar-toggler mb-3" onClick={navbar_toggle}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="d-lg-none d-block">
                    <button className="btn btn-danger close" onClick={navbar_hide}>
                        x
                    </button>
                </div>
                <ul className="navbar-nav">
                    {navItem} {/* This is where the navbar item gets added to */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
