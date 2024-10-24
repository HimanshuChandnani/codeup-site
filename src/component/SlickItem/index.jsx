import React from "react";
import SlickItemDefault from "./SlickItemDefault";
import SlickItemAlma from "./SlickItemAlma";
import SlickItemEvent from "./SlickItemEvent";
import SlickItemPartner from "./SlickItemPartner";

const SlickItem = ({ image = "a", name = "ERROR", work = "@ERROR", linkedin = "/", theme = "light", type = "normal", para = "undefined paragraph", site = "/", openPara = "" }) => {
    if (type === "normal") return <SlickItemDefault image={image} name={name} work={work} linkedin={linkedin} />;
    else if (type === "alma") return <SlickItemAlma image={image} name={name} para={para} theme={theme} openPara={openPara} />;
    else if (type === "event") return <SlickItemEvent image={image} name={name} theme={theme} />;
    else if (type === "partner") return <SlickItemPartner image={image} name={name} theme={theme} site={site} />;
};

export default SlickItem;
