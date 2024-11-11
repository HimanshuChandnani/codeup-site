import React from "react";
import Wrapper from "./style";
import image1 from "../../images/Codeup Show_page-0001.jpg";
import image2 from "../../images/The codeup show_page-0001.jpg";
import { codeupShowClose } from "../Utils/utils";

const CodeupShow = () => {
    return (
        <Wrapper className="closed-class" id="codeupShow">
            <div className="head py-5">
                <div className="px-5 row">
                    <div className="col-9">
                        <h2 className="color-light">The Codeup Show</h2>
                    </div>
                    <div className="col-3">
                        <button onClick={codeupShowClose} className="btn btn-danger close">
                            x
                        </button>
                    </div>
                </div>
            </div>
            <div className="image container">
                <img src={image1} alt="The Codeup Show" />
                <img src={image2} alt="The Codeup Show" />
            </div>
        </Wrapper>
    );
};

export default CodeupShow;
