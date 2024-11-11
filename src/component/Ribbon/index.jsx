import React, { useState } from "react";
import $ from "jquery";
import Wrapper from "./style";
import { ArrowLink } from "../StyledComponents/style";
import FormModal from "../FormModal";

const Ribbon = () => {
    const [element, setElement] = useState("");

    const closeRibbon = () => {
        setElement("");
        localStorage.setItem("ribbonClosed", true);
    };

    $(document).ready(() => {
        const ribbonCheck = () => {
            const data = (
                <div className="ribbon">
                    <div className="ribbon-container">
                        <div className="container">
                            <span>We are organising Codehack 1.0 in GIT</span> <FormModal />
                            <button className="btn btn-danger close" onClick={closeRibbon}>
                                x
                            </button>
                        </div>
                    </div>
                </div>
            );
            if (eval(localStorage.getItem("ribbonClosed"))) return;
            setElement(data);
        };

        ribbonCheck();
    });

    // const resetRibbon = () => {
    //     localStorage.setItem("ribbonClosed", false);
    //     ribbonCheck();
    // };

    return (
        <Wrapper id="ribbon" className="ribbon-body">
            {element}
        </Wrapper>
    );
};

export default Ribbon;
