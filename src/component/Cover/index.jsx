import React, { useEffect, useRef, useState } from "react";
import video from "../../images/astronauts.webm";
import Wrapper from "./style";
import { CodeupButton } from "../StyledComponents/style";

const Cover = () => {
    const bracket = ["{", "}"];

    const headingText = "A journey from Student to Aspirant";
    const paragraphText = "Let us understand where you are. Lets plan a roadmap and break the barrier.";

    const [heading, setHeading] = useState("");
    const [paragraph, setParagraph] = useState("");

    useEffect(() => {
        let headingIndex = 0;
        let paragraphIndex = 0;

        const headInterval = setInterval(() => {
            if (headingIndex < headingText.length + 1) {
                setHeading(headingText.slice(0, headingIndex));
                headingIndex++;
            } else {
                clearInterval(headInterval);
            }
        }, 30);
        const paraInterval = setInterval(() => {
            if (paragraphIndex < paragraphText.length + 1) {
                setParagraph(paragraphText.slice(0, paragraphIndex));
                paragraphIndex++;
            } else {
                clearInterval(paraInterval);
            }
        }, 15);
    }, []);

    const bracketRef = useRef();

    return (
        <Wrapper className="pt-5">
            <div className="video">
                <video autoPlay muted loop playsInline preload="none" src={video}></video>
            </div>
            <div className="container text-light position-relative">
                <div className="mx-5" style={{ minHeight: bracketRef.current ? bracketRef.current.clientHeight - 50 : 0 }}>
                    <h1 className="" id="cover-anim1">
                        <span className="left" ref={bracketRef}>
                            {bracket[0]}{" "}
                        </span>
                        {heading}
                        <span className="right"> {bracket[1]}</span>
                    </h1>
                    <p className="mb-5">{paragraph}</p>
                </div>
                <h2 className="mt-5 oneup">Our new app, OneUp, is launching soon! Stay tuned for a game-changing experience.</h2>
                <a href="https://oneup.codeup.in">
                    <CodeupButton className="mt-4">Get Started</CodeupButton>
                </a>
            </div>
        </Wrapper>
    );
};

export default Cover;
