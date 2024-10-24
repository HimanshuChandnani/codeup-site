import React from "react";
import Card from "../style";

const SlickItemEvent = ({ image = "", name = "" }) => {
    return (
        <Card>
            <div className="event">
                <div className="imageHolder">
                    <img src={image} alt="event" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-9">
                            <h5>{name}</h5>
                        </div>
                        <div className="col-lg-2 col-md-3 mt-md-0 mt-4">
                            <a href="/" className="arrow-link">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SlickItemEvent;
