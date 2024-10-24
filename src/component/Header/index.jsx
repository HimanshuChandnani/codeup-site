import React from "react";
import logo from "../../images/full-logo-white.a0d780b267862c65f814.png";
import Navbar from "../Navbar";
import Wrapper from "./style";

const Header = ({ hiddenOpacity = "false" }) => {
    const navbarItems = [
        { value: "Mentors", scrollToElem: "#mentors" },
        { value: "Alma Mater", scrollToElem: "#alma-mater" },
        { value: "Team", scrollToElem: "#team" },
        { value: "Events", scrollToElem: "#event" },
        // { value: "Partners", scrollToElem: "#partners" },
        { value: "Contact", func: "contact_open()", customClass: "float-right ml-lg-3 ml-0 mb-2", element: "button" },
    ];

    return (
        <Wrapper hide={hiddenOpacity}>
            <div className="blur-bg"></div>
            <div id="navigation" className="container pt-2">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-6 bottomp pb-3">
                        <a href="#">
                            <img className="logo" src={logo} alt="Codeup logo" />
                        </a>
                    </div>
                    <div className="col-lg-9 col-6">
                        <Navbar itemList={navbarItems} hiddenOpacity={hiddenOpacity} />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Header;
