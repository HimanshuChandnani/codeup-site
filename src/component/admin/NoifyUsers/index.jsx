import { useState } from "react";
import { Form } from "react-bootstrap";
import { CodeupButton } from "../../StyledComponents/style";
import { useAuth } from "../../../auth/useAuth";
import { api } from "../../../auth/apiClient";

const NotifyUsers = () => {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        deepLink: "",
        imageUrl: "",
        channel: "notification", // default
    });
    const { accessToken } = useAuth();
    const BASE_URL = process.env.REACT_APP_API_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post(`${BASE_URL}sendNotificationToAll`, formData);
            console.log(res);
        } catch (e) {
            console.error(e);
        }
        // if (onSubmit) onSubmit(formData);
        // console.log("Submitted data:", formData);
    };
    return (
        <div className="pb-4">
            {/* <h3 className="mb-3">Notify Users</h3> */}
            <Form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-white">
                {/* Title */}
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>
                        Title<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" value={formData.title} onChange={handleChange} required />
                </Form.Group>

                {/* Body */}
                <Form.Group className="mb-3" controlId="formBody">
                    <Form.Label>
                        Body<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter body" name="body" value={formData.body} onChange={handleChange} required />
                </Form.Group>

                {/* Deep Link */}
                <Form.Group className="mb-3" controlId="formDeepLink">
                    <Form.Label>Deep Link</Form.Label>
                    <Form.Control type="text" placeholder="https://example.com/page" name="deepLink" value={formData.deepLink} onChange={handleChange} />
                </Form.Group>

                {/* Image URL */}
                <Form.Group className="mb-3" controlId="formImageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="url" placeholder="https://example.com/image.png" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                </Form.Group>

                {/* Radio Buttons */}
                <Form.Group className="mb-3">
                    <Form.Label>Send Via</Form.Label>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input me-1" type="radio" name="channel" value="notification" checked={formData.channel === "notification"} onChange={handleChange} />
                            Notification
                        </label>

                        <label className="form-check-label">
                            <input className="form-check-input ms-3 me-1" type="radio" name="channel" value="email" checked={formData.channel === "email"} onChange={handleChange} />
                            Email
                        </label>

                        <label className="form-check-label">
                            <input className="form-check-input ms-3 me-1" type="radio" name="channel" value="both" checked={formData.channel === "both"} onChange={handleChange} />
                            Both
                        </label>
                    </div>
                </Form.Group>

                {/* Submit */}
                <CodeupButton type="submit" className="">
                    Send
                </CodeupButton>
            </Form>
        </div>
    );
};

export default NotifyUsers;
