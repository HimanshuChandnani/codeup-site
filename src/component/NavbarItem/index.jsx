import React from "react";
import { CodeupButton } from "../StyledComponents/style";
import { contactOpen, scrollCustom } from "../Utils/utils";
import $ from "jquery";

// const Navbaritem = (props = {value: 'undefined', scrollToElem: '', func: '', customClass: 'nav-link bottomp pb-4', elem: 'a'}) => {
const Navbaritem = ({ value = "undefined", scrollToElem = "", customClass = "nav-link bottomp pb-3", element = "a", dropdown = false, items }) => {
    const navbarHide = () => {
        const navbar = $("#collapsibleNavbar");
        navbar
            .animate({
                right: "-220px",
            })
            .removeClass("custom-nav")
            .removeClass("show");
    };

    if (dropdown) {
        const allItems = [];
        for (let i of items) {
            allItems.push(
                <li>
                    <a href={i.link}>{i.value}</a>
                </li>
            );
        }

        return (
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    {value}
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">{allItems}</ul>
            </li>
        );
    }

    if (element === "button") {
        return (
            <li className="nav-item">
                <CodeupButton
                    className={customClass}
                    onClick={() => {
                        contactOpen();
                        navbarHide();
                    }}
                >
                    {value}
                </CodeupButton>
            </li>
        );
    } else {
        return (
            <li className="nav-item">
                <a
                    className={customClass}
                    onClick={() => {
                        scrollCustom(scrollToElem, this);
                        navbarHide();
                    }}
                >
                    {value}
                </a>
            </li>
        );
    }
};

export default Navbaritem;
