// import React, { useState } from "react";
// import $ from "jquery";
import Wrapper from "./style";
// import FormModal from "../FormModal";
// import PdfModal from "../PdfModal";
import { ArrowLink } from "../StyledComponents/style";
import { getUser } from "../GoogleSigninButton";
import { useNavigate } from "react-router-dom";

const Ribbon = () => {
    const navigate = useNavigate();
    const handleApply = () => {
        if (getUser()?.user || null) {
            navigate("/summer-internship");
        } else {
            window.signin("/summer-internship");
        }
    };
    return (
        <Wrapper id="ribbon" className="ribbon-body">
            <div className="ribbon">
                <div className="ribbon-container">
                    <div className="container">
                        <span>Summer Internship 2025</span>
                        {/* <PdfModal /> */}
                        {/* <FormModal /> */}
                        <ArrowLink as="a" href="https://oneup.codeup.in" className="">
                            Apply Now!!
                        </ArrowLink>
                        {/* <button className="btn btn-danger close" onClick={closeRibbon}>
                                x
                            </button> */}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Ribbon;
