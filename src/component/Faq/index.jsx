import React from "react";
import Wrapper from "./style";
import $ from "jquery";
import { Title } from "../StyledComponents/style";

const Faq = () => {
    const details = [
        { question: "What are the benefits of enrolling?", answer: "By enrolling, you will gain access to placement opportunities with top companies, ranging from Tier 1 (MAANG-level MNCs) to Tier 2 and Tier 3 organizations. You'll also benefit from personalized one-on-one mentorship and gain valuable insights into corporate culture and its workings." },
        { question: "What are the chances of getting placed after completing the program?", answer: "Your placement prospects will largely depend on your performance during the program. However, we provide numerous opportunities for you to showcase your skills to top-tier companies." },
        { question: "Do you offer any courses as part of this program?", answer: "Yes, we offer comprehensive courses as part of the program." },
        { question: "How long does the course last?", answer: "The program lasts approximately 6 months. For the first 3 months, you will focus on mastering programming fundamentals, followed by specialized tasks tailored to your area of interest or expertise." },
        { question: "What is the process followed in this program?", answer: "The program follows a straightforward and structured process. There will be daily standup meetings where you'll receive assigned tasks, followed by regular review sessions. One-on-one mentoring will be provided, and once a month, you'll have the opportunity to attend guest sessions with industry leaders from Tier 1 companies such as Google, Amazon, Netflix, and LinkedIn." },
        { question: "What is the mode of learning or delivery for this program?", answer: "The program is delivered in an offline, in-person format." },
        { question: "What are the eligibility criteria to apply for this program?", answer: "The program is open to college students and individuals looking to build a career in technical domains." },
    ];

    const faqContent = [];

    for (let i of details) {
        faqContent.push(
            <div className="faq-item" key={i.question}>
                <p className="faq-question">
                    {i.question}
                    <span>
                        <svg width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04">
                            <path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z" />
                        </svg>
                    </span>
                </p>
                <div className="faq-answer faq-hidden">
                    <p className="py-3">{i.answer}</p>
                </div>
            </div>
        );
    }

    let faq_temp = "";
    $(document).ready(() => {
        $(".faq-question").click((elem) => {
            let element = elem.currentTarget;
            let answer_elem = $(element).siblings();
            $(".faq-answer").height(0);
            $(".faq-question span").removeClass("rotate");
            if (element !== faq_temp) {
                answer_elem.height($(answer_elem.children(0)).innerHeight());
                $(element).children(0).addClass("rotate");
                faq_temp = element;
            } else {
                faq_temp = "";
            }
        });
    });

    return (
        <Wrapper className="py-5" id="faq">
            <div className="container">
                <Title>FAQs</Title>
                {faqContent}
            </div>
        </Wrapper>
    );
};

export default Faq;
