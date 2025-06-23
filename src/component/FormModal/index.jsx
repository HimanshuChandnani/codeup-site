import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ArrowLink, CodeupButton } from "../StyledComponents/style";
import axios from "axios";

const FormModal = () => {
    const [lgShow, setLgShow] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        college: "",
        email: "",
        contact: "",
        year: "",
        branch: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateContact = (contact) => {
        return /^[0-9]{10}$/.test(contact);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            alert("Invalid email format");
            return;
        }

        if (!validateContact(formData.contact)) {
            alert("Contact number must be 10 digits");
            return;
        }

        try {
            const response = await axios.post("https://backend-auth-eosin.vercel.app/api/register/summer-internship", formData);
            alert(response.data.message);
            setLgShow(false);
            setFormData({ name: "", college: "", email: "", contact: "", year: "", branch: "" });
        } catch (error) {
            if (error.response && error.response.data.error) {
                alert(error.response.data.error); // Show backend error message (e.g., "Email already registered")
            } else {
                alert("Failed to register. Try again later.");
            }
        }
    };

    return (
        <>
            <ArrowLink as="button" onClick={() => setLgShow(true)}>
                Apply Now!!
            </ArrowLink>
            <Modal size="xl" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-lg">Summer Internship Registration</Modal.Title>
                    <button className="btn close btn-close" aria-label="Close" onClick={() => setLgShow(false)} style={{ margin: "1px", paddingLeft: "4px", paddingTop: "0", paddingRight: "4px", paddingBottom: "0", boxShadow: "unset !important" }}>
                        x
                    </button>
                </Modal.Header>
                <Modal.Body style={{ overflowY: "auto" }}>
                    <div className="px-0 px-lg-5">
                        <form onSubmit={handleSubmit} className="p-4 container shadow rounded">
                            {Object.keys(formData).map((field) => (
                                <div key={field} className="mb-3">
                                    <label className="form-label">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input type={field === "email" ? "email" : field === "contact" ? "tel" : "text"} name={field} value={formData[field]} onChange={handleChange} className="form-control" required />
                                </div>
                            ))}
                            <CodeupButton type="submit" className="d-block m-auto">
                                Register
                            </CodeupButton>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FormModal;
