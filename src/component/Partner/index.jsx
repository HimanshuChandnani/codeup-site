import React from "react";
import git from "../../images/GLOBAL-INSTITUTE-OF-TECHNOLOGY-1.webp";
import smf from "../../images/sm-logo.d545728480a292506e0d.png";
import vgu from "../../images/vgu_logo.png";
import becomePartner from "../../images/becomePartner.png";
import SlickSlider from "../SlickSlider";
import Wrapper from "./style";

const Partner = () => {
    const details = [
        { image: git, name: "Global Institute of Technology", site: "https://gitjaipur.com/" },
        { image: smf, name: "SM Financiers", site: "https://smfinanciers.com/" },
        { image: vgu, name: "Vivekananda Global University", site: "http://vgu.ac.in/" },
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
