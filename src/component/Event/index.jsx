import React from "react";
import event3 from "../../images/codeup collage students 2.webp";
import event2 from "../../images/codeup collage students.webp";
import event1 from "../../images/codeup collage 3.webp";
import SlickSlider from "../SlickSlider";
import { Title } from "../StyledComponents/style";

const Event = () => {
    const details = [
        { image: event1, name: "Codeup ACE Academy Orientation Program" },
        { image: event2, name: "Codeup ACE Academy Qualification Program" },
        { image: event3, name: "Codeup ACE Academy First Technical Event" },
    ];

    return (
        <div className="py-5 dark-bg" id="event">
            <Title className="text-light mb-2">Events</Title>
            <SlickSlider details={details} type="event" theme="dark" />
        </div>
    );
};

export default Event;
