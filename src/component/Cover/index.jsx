import React from "react";
import video from "../../images/astronauts.mp4";
import Wrapper from "./style";
import { CodeupButton } from "../StyledComponents/style";

const Cover = () => {
    const bracket = ["{", "}"];

    return (
        <Wrapper className="pt-5">
            <div className="video">
                <video autoPlay muted loop src={video}></video>
            </div>
            <div className="container text-light position-relative">
                <div id="cover-message" className="mx-5">
                    <h1 className="" id="cover-anim1">
                        <span className="left">{bracket[0]} </span>A journey from Student to Aspirant<span className="right"> {bracket[1]}</span>
                    </h1>
                    <p className="" id="cover-anim2">
                        Let us understand where you are. Lets plan a roadmap and break the barrier.
                    </p>
                </div>
                <CodeupButton className="mt-5">Get Started</CodeupButton>
            </div>
        </Wrapper>
    );
};

export default Cover;
