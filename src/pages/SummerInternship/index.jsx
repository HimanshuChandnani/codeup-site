import { useEffect, useState } from "react";
import { CodeupButton } from "../../component/StyledComponents/style";
import axios from "axios";
import Header from "../../component/Header";
import Footer from "../../component/Foot";
import GoogleSignInButton, { getUser } from "../../component/GoogleSigninButton";

const SummerInternship = () => {
    const [lgShow, setLgShow] = useState(false);
    const [user, setUser] = useState(getUser()?.user || null);
    const [joinedWhatsApp, setJoinedWhatsApp] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college: "",
        contact: "",
        year: "",
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

        if (!joinedWhatsApp) {
            alert("Please confirm that you have joined the WhatsApp group.");
            return;
        }

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
            setFormData({ name: "", email: "", college: "", contact: "", year: "" });
        } catch (error) {
            if (error.response && error.response.data.error) {
                alert(error.response.data.error); // Show backend error message (e.g., "Email already registered")
            } else {
                alert("Failed to register. Try again later.");
            }
        }
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedUser = getUser()?.user || null;
            setUser(updatedUser);
        };

        window.addEventListener("userUpdate", handleStorageChange);

        return () => {
            window.removeEventListener("userUpdate", handleStorageChange);
        };
    }, []);

    useEffect(() => {
        if (user) {
            setFormData((prev) => {
                return { ...prev, name: user.name, email: user.email };
            });
        }
    }, [user]);

    return (
        <>
            <Header navbarItems={[]} />
            <div style={{ paddingTop: 110 }}></div>
            <div className="px-3">
                <form onSubmit={handleSubmit} className="py-4 px-5 container shadow rounded mb-5" style={{ maxWidth: 600 }}>
                    <h2 className="text-center mb-3">Summer Internship Registeration</h2>
                    <div className="card py-3 px-4 mb-3">
                        {user ? (
                            <>
                                <div className="mb-2">Name: {user.name}</div>
                                <div>Email: {user.email}</div>
                            </>
                        ) : (
                            <>
                                <div style={{ fontSize: 20 }} className="text-center mb-2">
                                    Sign in is required
                                </div>
                                <GoogleSignInButton onSignIn={setUser} type="google" />
                            </>
                        )}
                    </div>
                    {Object.keys(formData).map((field) =>
                        !(field === "name" || field === "email" || field === "year") ? (
                            <div key={field} className="mb-3">
                                <label className="form-label">
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <input type={field === "email" ? "email" : field === "contact" ? "tel" : "text"} name={field} value={formData[field]} onChange={handleChange} className="form-control" required />
                            </div>
                        ) : null
                    )}
                    <label className="form-label">
                        Year
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <select name="year" value={formData.year} onChange={handleChange} className="form-control mb-3" required>
                        <option value="">Select Year</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                    </select>
                    {/* WhatsApp Confirmation Section */}
                    <div className="mb-3">
                        <p>
                            Join our{" "}
                            <a href="https://chat.whatsapp.com/Cu6vDMtzYNKJ5FaTiSQNDM" target="_blank" rel="noopener noreferrer" style={{ color: "#4bf48f", textDecoration: "underline" }}>
                                Summer Internship (2025) WhatsApp group
                            </a>{" "}
                            for important updates
                        </p>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked={joinedWhatsApp} required onChange={() => setJoinedWhatsApp(!joinedWhatsApp)} />I confirm that I have joined the WhatsApp group<span style={{ color: "red" }}>*</span>
                            </label>
                        </div>
                    </div>
                    <CodeupButton type="submit" className="d-block m-auto" disabled={user ? false : true}>
                        Register
                    </CodeupButton>
                </form>
                {/* <div className="py-4 px-5 container shadow rounded mb-5 text-center" style={{ maxWidth: 600 }}>
                    <p>Registrations have now been closed</p>
                    <Link to="/">
                        <CodeupButton>
                            <svg fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width={16} height={16} className="mr-2">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
                                </g>
                            </svg>
                            Back to Codeup
                        </CodeupButton>
                    </Link>
                </div> */}
            </div>
            <div
            // style={{ position: "absolute", bottom: 0, width: "100%" }}
            >
                <Footer page="footer" />
            </div>
        </>
    );
};

export default SummerInternship;
