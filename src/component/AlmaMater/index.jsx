import React, { useState } from "react";
import ritika from "../../images/ritika.79b0f5b5f3f4bb12932b.webp";
import vidhan from "../../images/vidhan.00f8e173c57e04c96e14.webp";
import shivali from "../../images/shivali.bcf432d17982bebb8836.webp";
import safal from "../../images/safal.webp";
import abhinav from "../../images/abhinav.webp";
// import rachit from "../../images/rachit.webp";
import abhiraj from "../../images/abhiraj.webp";
import anish from "../../images/anish.webp";
import SlickSlider from "../SlickSlider";
import { Title } from "../StyledComponents/style";
import Wrapper from "./style";
import $ from "jquery";

const AlmaMater = () => {
    const details = [
        {
            image: ritika,
            name: "Ritika Innani",
            para: "During my B.tech., when i was looking for an institute for my training, i came to know about Codeup. I enrolled myself for the Web Technology course, where i learned HTML, CSS and JavaScript. The training was really awesome and proved to be very useful. We developed an online presentation making website. The trainer himself was a skilled expert with a lot of hands-onexperience. Apart from the technology, he also gave us information & tips for cracking company interviews. Recently, i have been employed as a Jr. Software Engineer in InTimeTec Visionsoft pvt. ltd., Jaipur. I highly recommend Codeup for those looking for a quality training.",
        },

        {
            image: vidhan,
            name: "Vidhan Dadhich",
            para: "When I was in college I was searching for an institute for enhancing my core concepts in programming languages, then I found Codeup where I not only learned the core concepts but also implemented them in real time projects which helped me in sharpening my problem-solving skills. I recommend Codeup for those who want to learn the real core concepts of programming.",
        },

        {
            image: shivali,
            name: "Shivali Krishna",
            para: "I have completed my training at Codeup, and I can confidently say that it was one of the best decisions I’ve ever made. The program was comprehensive and well-structured, covering everything from foundational concepts to advanced techniques in a clear and accessible way. The instructors were knowledgeable, supportive, and always made sure we really understood the material. I recommend Codeup to anyone looking to gain practical, in-demand skills and launch a successful career in tech.Thank you Codeup.",
        },

        {
            image: safal,
            name: "Safal Goyal",
            para: "During the third year of my Btech, I was not sure which technology I should choose for the future, I searched for different programs and institutes then I came to know about Codeup. I am so thankful that I enrolled myself in the training where the mentors helped me in planning the roadmap for my career from starting to end. The curriculum was hands-on and project-based, which made the learning experience engaging and relevant to the industry.I’m thoroughly satisfied with the training I received at Codeup, and I feel well-prepared to take on new challenges in the tech industry.",
        },

        {
            image: abhinav,
            name: "Abhinav Sharma",
            para: "I have done my training from Codeup during college.Throughout the course, I had the opportunity to work on real-world projects that helped solidify my understanding and apply what I was learning in a practical setting.One of the best things about Codeup is how they help you plan your career. They worked with us to create a clear roadmap, so we knew exactly what steps to take to reach our goals. The training was not just about learning the material; it was about setting us up for success in the future.I would definitely recommend it to anyone looking to build a strong foundation and achieve their career goals.",
        },

        // {image: rachit, name: 'Rachit Bohra', para: 'I enrolled in a program at Codeup, and it was an incredible learning experience. I gained a lot of knowledge, not just in the technical skills, but also in how the corporate world works. The curriculum covered everything we needed, and the instructors were always available to help us along the way.Beyond the technical training, Codeup taught us about corporate culture, teamwork, and professional communication, which are essential for succeeding in any job. These lessons were just as valuable as the technical skills because they prepared us for real-world work environments.'},

        { image: abhiraj, name: "Abhiraj singh", para: "Codeup truly transformed my skills and confidence. The mentors were incredibly supportive, offering personalized guidance and practical advice that made a real difference. The hands-on projects were perfect for applying what I learned. I’m grateful for the experience and recommend Codeup to anyone wanting to grow in tech." },

        { image: anish, name: "Anish Choudhary", para: "My time at Codeup was outstanding. The instructors were passionate and supportive, turning complex concepts into manageable lessons. The interactive workshops helped me apply my learning effectively. I’m thankful for their guidance and recommend Codeup to anyone serious about advancing their tech career." },
    ];

    const [para, setPara] = useState("");

    $(document).ready(() => {
        const fullPara = $("#full-para");
        fullPara.height(fullPara.next().innerHeight() - 60);
    });

    const closePara = () => {
        $("#full-para").addClass("closed-class");
    };

    const openPara = (text) => {
        setPara(text);
        $("#full-para").removeClass("closed-class");
    };
    return (
        <Wrapper className="py-5 dark-bg" id="alma-mater">
            <div className="container">
                <Title className="text-light">Alma Mater</Title>
                <div id="full-para" className="full-para closed-class">
                    <button className="btn close btn-close" onClick={closePara}></button>
                    {para}
                </div>
                <SlickSlider details={details} theme="dark" type="alma" openPara={openPara} />
            </div>
        </Wrapper>
    );
};

export default AlmaMater;
