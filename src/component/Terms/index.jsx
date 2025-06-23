import React from "react";
import Wrapper from "./style";
import { termsClose } from "../Utils/utils";

const Contact = () => {
    return (
        <Wrapper className="closed-class" id="terms">
            <div className="head py-5">
                <div className="px-5 row">
                    <div className="col-9">
                        <h2 className="color-light">Terms of use</h2>
                    </div>
                    <div className="col-3">
                        <button onClick={termsClose} className="btn btn-close close"></button>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <h2>Terms of Use - CodeUp ACE Academy</h2>
                <h4>Welcome to CodeUp ACE Academy</h4>
                <p>At CodeUp ACE Academy, we help students become professionals ready to thrive in the corporate world. Our mission is to empower students with skills, knowledge, and insights to build successful careers and navigate the challenges of the professional environment.</p>
                <h4>Eligibility and Qualifications</h4>
                <p>To join CodeUp ACE Academy, students should have:</p>
                <ul>
                    <li>A strong interest in programming and development.</li>
                    <li>Basic knowledge of programming languages.</li>
                    <li>A commitment to personal and professional growth.</li>
                </ul>
                <h4>Selection Process</h4>
                <p>Our selection process includes the following steps:</p>
                <ol>
                    <li>Application Submission: Fill out an application form with details about your background and motivation.</li>
                    <li>Initial Screening: Participate in a technical test and an interview to assess your skills and readiness.</li>
                    <li>Final Selection: Successful candidates will be notified and provided with instructions to begin the program.</li>
                </ol>
                <h4>Program Structure and Benefits</h4>
                <p>Once selected, students will receive access to the following benefits:</p>
                <ul>
                    <li>Daily Stand-Up Meetings: Align on daily tasks and goals.</li>
                    <li>Programming Fundamentals (30 Days): Focus on foundational programming languages (C, C++, Python, Java) with daily practice and projects.</li>
                    <li>OOP & SOLID Principles (30 Days): Learn Object-Oriented Programming and SOLID principles for advanced programming skills.</li>
                    <li>Data Structures & Algorithms (30 Days): Dive deep into DSA to solve complex problems using learned concepts.</li>
                    <li>One-on-One Mentorship: Personalized guidance to address individual challenges.</li>
                    <li>Expert Industrial Sessions: Learn from industry experts about trends, practices, and career growth.</li>
                    <li>
                        Regular Assessments:
                        <ul>
                            <li>Daily Tasks: Receive daily assignments with mentor feedback.</li>
                            <li>Weekly Quizzes: Test understanding of key concepts.</li>
                            <li>Monthly Exams: Comprehensive exams with expert reviews and performance rankings.</li>
                        </ul>
                    </li>
                    <li>Progress Tracking: Use our dedicated app to track all activities, sessions, and assessments.</li>
                    <li>Time-Sheet Submission: Submit daily time sheets to record activities and attendance.</li>
                </ul>
                <h4>Post-Program Engagement</h4>
                <p>After completing the program, students will:</p>
                <ul>
                    <li>Continue to have access to our mentorship network.</li>
                    <li>Participate in workshops and projects to maintain and build upon their skills.</li>
                </ul>
            </div>
        </Wrapper>
    );
};

export default Contact;
