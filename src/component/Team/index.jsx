import React from "react";
import priyanka from "../../images/priyanka.png";
import kushal from "../../images/Kushal.jpg";
import chandni from "../../images/chandni.jpg";
import himanshu from "../../images/himanshu.jpg";
import vinita from "../../images/vinita.jpg";
import SlickSlider from "../SlickSlider";
import { Title } from "../StyledComponents/style";

const Team = () => {
    const details = [
        { image: priyanka, name: "Priyanka Jangid", work: "Program Lead @ACE Academy", linkedin: "https://www.linkedin.com/in/apoorv-purohit/" },
        { image: kushal, name: "Kushal Sharma", work: "Platform Lead Academy", linkedin: "https://www.linkedin.com/in/ajcse/" },
        { image: chandni, name: "Chandni Sodani", work: "Mentor Lead Academy", linkedin: "https://www.linkedin.com/in/keith-heacock/" },
        { image: himanshu, name: "Himanshu Chandnani", work: "Mentor @ACE Academy", linkedin: "https://www.linkedin.com/in/avish-samdani/" },
        { image: vinita, name: "Vinita Garg", work: "Mentor @ACE Academy", linkedin: "https://www.linkedin.com/in/shubhamguptag/" },
    ];

    return (
        <section className="py-5" id="team">
            <div className="container">
                <Title>Our Team</Title>
                <SlickSlider className="" details={details} />
            </div>
        </section>
    );
};

export default Team;
