import React from "react";
import git from "../../images/GLOBAL-INSTITUTE-OF-TECHNOLOGY-1.webp";
import smf from "../../images/sm-logo.d545728480a292506e0d.webp";
import jic from "../../images/Big JIC.webp";
import arya from "../../images/Arya.webp";
import manipal from "../../images/manipal.webp";
import becomePartner from "../../images/becomePartner.webp";
import SlickSlider from "../SlickSlider";
import Wrapper from "./style";

const Partner = () => {
    const details = [
        { image: git, name: "Global Institute of Technology", site: "https://gitjaipur.com/" },
        { image: smf, name: "SM Financiers", site: "https://smfinanciers.com/" },
        { image: jic, name: "JECRC Incubation Center", site: "https://jecrcincubation.com/" },
        { image: arya, name: "Arya College of Engineering & IT", site: "https://www.aryacollege.in/" },
        { image: manipal, name: "Manipal University Jaipur", site: "https://jaipur.manipal.edu/" },
        { image: becomePartner, name: "become a partner", site: "contact" },
    ];
    return (
        <Wrapper className="dark-bg pb-5" id="partners">
            <div className="container pb-5">
                <SlickSlider details={details} theme="dark" type="partner" />
            </div>
        </Wrapper>
    );
};

export default Partner;
