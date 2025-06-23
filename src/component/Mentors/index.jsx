import React from "react";
import apoorv from "../../images/apoorv.webp";
import aanchal from "../../images/aanchal.webp";
import keith from "../../images/kieth.webp";
import shubham from "../../images/shubham.webp";
import siddharth from "../../images/siddharth.webp";
import amit from "../../images/amit.webp";
import mohit from "../../images/mohit.webp";
import SlickSlider from "../SlickSlider";
import { Title } from "../StyledComponents/style";

const Mentors = () => {
    const details = [
        { image: apoorv, name: "Apoorv Purohit", work: "@Google", linkedin: "https://www.linkedin.com/in/apoorv-purohit/" },
        { image: aanchal, name: "Aanchal Jain", work: "@Microsoft", linkedin: "https://www.linkedin.com/in/ajcse/" },
        { image: keith, name: "Keith Heacock", work: "@PayPal", linkedin: "https://www.linkedin.com/in/keith-heacock/" },
        { image: shubham, name: "Shubham Gupta", work: "@Nagarro", linkedin: "https://www.linkedin.com/in/shubhamguptag/" },
        { image: siddharth, name: "Siddharth Gupta", work: "@Razorpay", linkedin: "https://www.linkedin.com/in/siddharth-gupta415/" },
        { image: amit, name: "Amit Jain", work: "@Metacube", linkedin: "https://www.linkedin.com/in/forcemantis/" },
        { image: mohit, name: "Mohit Nebhnani", work: "@Anritsu", linkedin: "https://www.linkedin.com/in/mohit-nebhnani/" },
    ];

    return (
        <section className="py-5" id="mentors">
            <div className="container">
                <Title>Guest Mentors</Title>
                <SlickSlider className="" details={details} />
            </div>
        </section>
    );
};

export default Mentors;
