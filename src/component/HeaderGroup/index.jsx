import React from "react";
import Wrapper from "./style";
import Header from "../Header";
import Cover from "../Cover";
import Partner from "../Partner";
import $ from "jquery";

const HeaderGroup = () => {
    // Function to set the height dynamically
    const setFullHeight = () => {
        const fullHeightDiv = document.querySelector(".full-height-div");
        fullHeightDiv.style.height = `${window.innerHeight}px`;
    };

    // Set the full height on load and resize
    $(document).ready(() => setFullHeight());
    window.addEventListener("load", setFullHeight);
    window.addEventListener("resize", setFullHeight);

    return (
        <Wrapper className="full-height-div">
            <Header />
            <Cover />
            <Partner />
        </Wrapper>
    );
};

export default HeaderGroup;
