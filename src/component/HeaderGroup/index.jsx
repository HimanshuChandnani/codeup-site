import React from "react";
import Wrapper from "./style";
import Header from "../Header";
import Cover from "../Cover";
import Partner from "../Partner";
import $ from "jquery";
// import Ribbon from "../Ribbon";

const HeaderGroup = () => {
    // Function to set the height dynamically
    const setFullHeight = () => {
        const fullHeightDiv = document.querySelector(".full-height-div");
        try {
            fullHeightDiv.style.height = `${window.innerHeight}px`;
        } catch (err) {
            console.log(err);
        }
    };

    // Set the full height on load and resize
    $(document).ready(() => setFullHeight());
    window.addEventListener("resize", setFullHeight);

    return (
        <Wrapper className="full-height-div">
            {/* <Ribbon /> */}
            <Header theme="blur" />
            <Cover />
            {/* <Partner /> */}
        </Wrapper>
    );
};

export default HeaderGroup;
