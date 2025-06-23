import React from "react";
import logoWhite from "../../images/full-logo-white.a0d780b267862c65f814.webp";
import logoBlack from "../../images/full-logo-black.dc3e624a01f5dc34c84d.webp";
import Navbar from "../Navbar";
import Wrapper from "./style";

const navbarItemsDefault = [
    { value: "Mentors", scrollToElem: "#mentors" },
    { value: "Alma Mater", scrollToElem: "#alma-mater" },
    { value: "Team", scrollToElem: "#team" },
    { value: "Events", scrollToElem: "#event" },
    {
        value: "Programs",
        dropdown: true,
        items: [
            { value: "Ambassador", link: "/ambassador" },
            { value: "Codehack", link: "/ambassador/git" },
        ],
    },
    // { value: "Contact", func: "contact_open()", customClass: "float-end ml-lg-3 ml-0 mb-2", element: "button" },
];

const Header = ({ theme = "dark", navbarItems = navbarItemsDefault }) => {
    return (
        <>
            <Wrapper theme={theme}>
                {/* <Ribbon /> */}
                <div className="blur-bg"></div>
                <div id="navigation" className="container pt-2">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-6 bottomp pb-3">
                            <a href="/">
                                <img className="logo" src={theme === "light" ? logoBlack : logoWhite} alt="Codeup logo" />
                            </a>
                        </div>
                        <div className="col-lg-9 col-6">
                            <Navbar itemList={navbarItems} theme={theme} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Header;
