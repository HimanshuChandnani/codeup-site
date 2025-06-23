import React from "react";
import Wrapper from "./style";
import { CodeupButton } from "../StyledComponents/style";
import { contactClose } from "../Utils/utils";

const Contact = () => {
    return (
        <Wrapper className="closed-class" id="contact-form">
            <div className="head py-5">
                <div className="px-5 row">
                    <div className="col-9">
                        <h2 className="color-light">Contact Us</h2>
                    </div>
                    <div className="col-3">
                        <button onClick={contactClose} className="btn btn-close close"></button>
                    </div>
                </div>
            </div>
            <form className="row px-5 mx-auto">
                <label className="required">Name:</label>
                <input type="text" className="one col-12 required" placeholder="Name" required />
                <label className="required">Contact:</label>
                <input type="tel" className="one col-12" placeholder="Contact" required />
                <label className="required">Subject:</label>
                <input type="text" className="two col-12" placeholder="Subject" required />
                <label className="required">Description:</label>
                <textarea className="three col-12" placeholder="Description" required></textarea>
                <CodeupButton>Submit</CodeupButton>
            </form>
        </Wrapper>
    );
};

export default Contact;
