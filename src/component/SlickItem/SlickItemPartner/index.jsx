import React from "react";
import Card from "../style";
import { contactOpen } from "../../Utils/utils";

const SlickItemPartner = ({ image = "", name = "", theme = "light", site = "/" }) => {
    if (site === "contact")
        return (
            <Card style={{ cursor: "pointer" }} onClick={contactOpen} theme={theme}>
                <img src={image} alt={name} className="partner" />
            </Card>
        );

    return (
        <Card as="a" href={site} target="_blank" theme={theme}>
            <img src={image} alt={name} className="partner" />
        </Card>
    );
};

export default SlickItemPartner;
