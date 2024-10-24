import React from "react";
import Card from "../style";
import { ArrowLink } from "../../StyledComponents/style";

const SlickItemAlma = ({ image = "a", name = "ERROR", theme = "light", para = "undefined paragraph", openPara = "" }) => {
    return (
        <Card className="row" theme={theme}>
            <div className="col-md-3">
                <img className="side-image" src={image} alt="alma-mater" />
            </div>
            <div className="col-md-9 mt-md-0 mt-4">
                <div className="text">
                    <p className="name">{name}</p>
                    <p className="para">{para}</p>
                    <ArrowLink onClick={() => openPara(para)}>Read more</ArrowLink>
                </div>
            </div>
        </Card>
    );
};

export default SlickItemAlma;
