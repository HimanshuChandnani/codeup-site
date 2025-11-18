import React from "react";
import Wrapper from "./style";
import logo from "../../images/full-logo-white.a0d780b267862c65f814.webp";
import { contactOpen, scrollCustom, termsOpen } from "../Utils/utils";

const Footer = ({ page = "home" }) => {
    return (
        <>
            {page === "home" && (
                <Wrapper id="footer">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="follow col-lg-8 col-md-6 text-white">
                                <img src={logo} alt="codeup_logo" />
                                <div className="icons my-4">
                                    <h4>Follow Us</h4>
                                    <a href="https://www.facebook.com/codeup.in">
                                        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 500 500">
                                            <path d="M484.85,124.75a144.17,144.17,0,0,0-2.32-25.29c-1.94-10.19-4.67-20.12-9.55-29.33A101.85,101.85,0,0,0,453.39,44a97.14,97.14,0,0,0-42.76-24.4c-14.83-4-30-4.84-45.21-4.82a.46.46,0,0,1-.09-.23H134.59c0,.08,0,.16,0,.23-8.65.16-17.32.09-25.92,1.16A123.46,123.46,0,0,0,81,22.15,97.48,97.48,0,0,0,44.25,46.27,97.15,97.15,0,0,0,19.68,89.18c-3.94,14.72-4.8,29.73-4.82,44.85L14.7,365.7v0c.28,10.45.37,21,2.13,31.36,1.87,11,4.54,21.71,9.64,31.69A101.36,101.36,0,0,0,54.77,463a91.92,91.92,0,0,0,28.31,15.35c15.12,4.88,30.72,6.75,46.55,6.84,9.88.06,19.74.31,29.62.27,35.45-.15,70.89,0,106.34,0V328.22H212.71V265H265.6V219.7s-3.82-75.25,70.34-81.25h56.16v57.25h-40.9S333.76,199,331,215.34v48.53h58.35l-6.54,60.53H329.94v161q22.27-.11,44.55-.38a169.3,169.3,0,0,0,28.23-3A95.61,95.61,0,0,0,450,459c15.78-14.08,26.43-31.3,31.24-52.09,3.15-13.59,3.93-27.38,4.07-41.21v-2.76C485.3,361.87,484.89,127.84,484.85,124.75Z" />
                                        </svg>
                                    </a>
                                    <a href="https://in.linkedin.com/company/codeup-in">
                                        <svg enableBackground="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px">
                                            <g>
                                                <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                                                <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                                            </g>
                                        </svg>
                                    </a>
                                    <a href="https://www.youtube.com/@codeup-in">
                                        <svg height="100%" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }} version="1.1" viewBox="0 0 512 512" width="100%">
                                            <path
                                                d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z"
                                                style={{ fillRule: "nonzero" }}
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* <div className="col-lg-5 col-md-6 small text-white">
                                <section id="contact">
                                    <h4>Contact Us</h4>
                                    <p>
                                        <strong>Business Name:</strong> Codeup
                                    </p>
                                    <p>
                                        <strong>Address:</strong> 19, Jain Vihar, Kamla Nehru Nagar, Ajmer Road, Jaipur, Rajasthan 302021, India
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> +91 87766 7350
                                    </p>
                                    <p>
                                        <strong>Website:</strong> <a href="https://codeup.in">https://codeup.in</a>
                                    </p>
                                </section>
                            </div> */}

                            <div className="navi col-lg-2 col-md-3 col-6">
                                <a onClick={contactOpen}>Contact</a>
                                <a onClick={() => scrollCustom("#faq")}>FAQs</a>
                                <a href="https://show.codeup.in">The Codeup Show</a>
                            </div>
                            <div className="navi col-lg-2 col-md-3 col-6">
                                {/* <a onClick={() => scrollCustom("#partners")}>Partnership</a> */}
                                {/* <a onClick={termsOpen} id="term-button">
                                    Terms of use
                                </a> */}
                                <a onClick={() => scrollCustom("#team")}>About</a>
                                <a onClick={() => scrollCustom("#alma-mater")}>Alma Mater</a>
                                <a onClick={() => scrollCustom("#event")}>Events</a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright py-4 text-white">
                        <p className="m-0">
                            © Copyright 2016-2025 |{" "}
                            <a href="https://www.linkedin.com/company/codeup-in/" target="_blank" rel="noreferrer" style={{ color: "#4bf48f" }}>
                                Codeup
                            </a>{" "}
                            | Student to Aspirant | All Rights Reserved
                        </p>
                    </div>
                </Wrapper>
            )}

            {page === "footer" && (
                <Wrapper id="footer">
                    <div className="container py-5">
                        <div className="row">
                            <div className="follow col-lg-8 col-md-6">
                                <img src={logo} alt="codeup_logo" />
                                <div className="icons my-4">
                                    <h4>Follow Us</h4>
                                    <a href="https://www.facebook.com/codeup.in">
                                        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 500 500">
                                            <path d="M484.85,124.75a144.17,144.17,0,0,0-2.32-25.29c-1.94-10.19-4.67-20.12-9.55-29.33A101.85,101.85,0,0,0,453.39,44a97.14,97.14,0,0,0-42.76-24.4c-14.83-4-30-4.84-45.21-4.82a.46.46,0,0,1-.09-.23H134.59c0,.08,0,.16,0,.23-8.65.16-17.32.09-25.92,1.16A123.46,123.46,0,0,0,81,22.15,97.48,97.48,0,0,0,44.25,46.27,97.15,97.15,0,0,0,19.68,89.18c-3.94,14.72-4.8,29.73-4.82,44.85L14.7,365.7v0c.28,10.45.37,21,2.13,31.36,1.87,11,4.54,21.71,9.64,31.69A101.36,101.36,0,0,0,54.77,463a91.92,91.92,0,0,0,28.31,15.35c15.12,4.88,30.72,6.75,46.55,6.84,9.88.06,19.74.31,29.62.27,35.45-.15,70.89,0,106.34,0V328.22H212.71V265H265.6V219.7s-3.82-75.25,70.34-81.25h56.16v57.25h-40.9S333.76,199,331,215.34v48.53h58.35l-6.54,60.53H329.94v161q22.27-.11,44.55-.38a169.3,169.3,0,0,0,28.23-3A95.61,95.61,0,0,0,450,459c15.78-14.08,26.43-31.3,31.24-52.09,3.15-13.59,3.93-27.38,4.07-41.21v-2.76C485.3,361.87,484.89,127.84,484.85,124.75Z" />
                                        </svg>
                                    </a>
                                    <a href="https://in.linkedin.com/company/codeup-in">
                                        <svg enableBackground="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px">
                                            <g>
                                                <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                                                <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                                            </g>
                                        </svg>
                                    </a>
                                    <a href="https://www.youtube.com/@codeup-in">
                                        <svg height="100%" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }} version="1.1" viewBox="0 0 512 512" width="100%">
                                            <path
                                                d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z"
                                                style={{ fillRule: "nonzero" }}
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="navi col-lg-2 col-md-3 col-6">
                                {/* <a onClick={() => scrollCustom("#team")}>About</a>
                                <a onClick={contactOpen}>Contact</a>
                                <a onClick={() => scrollCustom("#faq")}>FAQs</a> */}
                            </div>
                            <div className="navi col-lg-2 col-md-3 col-6">
                                {/* <a onClick={() => scrollCustom("#partners")}>Partnership</a>
                                <a onClick={termsOpen} id="term-button">
                                    Terms of use
                                </a>
                                <a onClick={() => scrollCustom("#alma-mater")}>Alma Mater</a>
                                <a onClick={() => scrollCustom("#event")}>Events</a> */}
                                <a href="https://show.codeup.in">The Codeup Show</a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright py-4 text-white">
                        <p className="m-0">
                            © Copyright 2016-2025 |{" "}
                            <a href="https://www.linkedin.com/company/codeup-in/" target="_blank" rel="noreferrer" style={{ color: "#4bf48f" }}>
                                Codeup
                            </a>{" "}
                            | Student to Aspirant | All Rights Reserved
                        </p>
                    </div>
                </Wrapper>
            )}
        </>
    );
};

export default Footer;
