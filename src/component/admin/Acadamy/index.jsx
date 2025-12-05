"use client";

import { useEffect, useState } from "react";
import { Modal, Button, Form, Table, Spinner } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import debounce from "lodash/debounce";
import { CodeupButton } from "../../StyledComponents/style";
import { codeupAlert } from "../../Alert";
import { ArrowDown, ArrowRight, GraduationCap, PencilIcon, Plus, TrashIcon, User } from "lucide-react";
import styled from "styled-components";
import { useAuth } from "../../../auth/useAuth";
import { api } from "../../../auth/apiClient";

const ResponsiveCodeupButton = styled(CodeupButton)`
    @media (max-width: 992px) {
        padding: 4px 12px;
        font-size: 14px;
    }
`;

const Academy = () => {
    const [academies, setAcademies] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editAcademy, setEditAcademy] = useState(null);
    const defaultForm = { name: "", description: "", startDate: "", endDate: "", institution: "", contactNumber: "" };
    const [form, setForm] = useState(defaultForm);
    const [studentForm, setStudentForm] = useState({ name: "", email: "", picture: "", associated_institute: "" });
    const [mentorForm, setMentorForm] = useState({ name: "", email: "", picture: "", contactNumber: "", yearsOfExperience: "", areaOfExpertise: "" });

    const [manageAcademyId, setManageAcademyId] = useState(null);
    const [students, setStudents] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showMentorModal, setShowMentorModal] = useState(false);
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { accessToken } = useAuth();

    const fetchAcademies = async () => {
        try {
            const res = await api.get(`${BASE_URL}academy`);
            setAcademies(res.data);
        } catch (err) {
            console.error("Error fetching academies:", err.message);
        }
    };

    useEffect(() => {
        fetchAcademies();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const res = editAcademy ? await api.put(`${BASE_URL}academy/${editAcademy.id}`, form) : await api.post(`${BASE_URL}academy`, form);

            console.log(res);
            setShowModal(false);
            setEditAcademy(null);
            setForm({ name: "", description: "", startDate: "", endDate: "", institution: "", contactNumber: "" });
            fetchAcademies();
        } catch (err) {
            console.error("Submit error:", err.message);
        }
    };

    const fetchStudents = async (academyId) => {
        try {
            const res = await api.get(`${BASE_URL}academy/${academyId}/students`);
            setStudents(res.data);
            setManageAcademyId(academyId);
            setShowStudentModal(true);
        } catch (err) {
            console.error("Student fetch error:", err.message);
        }
    };

    const fetchMentors = async (academyId) => {
        try {
            const res = await api.get(`${BASE_URL}academy/${academyId}/mentors`);
            setMentors(res.data);
            setManageAcademyId(academyId);
            setShowMentorModal(true);
        } catch (err) {
            console.error("Mentor fetch error:", err.message);
        }
    };

    // Utility function to format ISO to YYYY-MM-DD
    const formatDateForInput = (isoString) => {
        if (!isoString) return "";
        return new Date(isoString).toISOString().split("T")[0];
    };

    const handleEdit = (academy) => {
        setEditAcademy(academy);
        setForm({
            ...academy,
            startDate: formatDateForInput(academy.startDate),
            endDate: formatDateForInput(academy.endDate),
        });
        setShowModal(true);
    };

    const handleStudentChange = (e) => {
        setStudentForm({ ...studentForm, [e.target.name]: e.target.value });
    };

    const handleMentorChange = (e) => {
        setMentorForm({ ...mentorForm, [e.target.name]: e.target.value });
    };

    const fetchUsers = async (inputValue) => {
        if (!inputValue || inputValue.trim().length < 3) return [];
        try {
            const res = await api.get(`${BASE_URL}search/user?q=${encodeURIComponent(inputValue)}`);
            return res.data;
        } catch (e) {
            console.error("Failed to load users", e);
            return [];
        }
    };

    const debouncedFetchUsers = debounce((inputValue, callback) => {
        fetchUsers(inputValue).then(callback);
    }, 400);

    const loadUserOptions = (inputValue) => {
        return new Promise((resolve) => {
            debouncedFetchUsers(inputValue, resolve);
        });
    };

    // const createStudent = async () => {
    //     try {
    //         await api.post(`${BASE_URL}academy/${manageAcademyId}/student`, studentForm, {
    //             headers: { Authorization: `Bearer ${accessToken}` },
    //         });
    //         fetchStudents(manageAcademyId);
    //         setStudentForm({ name: "", email: "", picture: "", associated_institute: "" });
    //     } catch (err) {
    //         console.error("Create student error:", err.message);
    //     }
    // };
    const addStudent = async (e) => {
        e.preventDefault();
        console.log(selectedUser);
        try {
            await api.post(`${BASE_URL}academy/${manageAcademyId}/student`, { name: selectedUser.name, email: selectedUser.email, picture: selectedUser.picture, userId: selectedUser.id });
            // refresh the student list after successful addition
            fetchStudents(manageAcademyId); // or however you load students
            setSelectedUser(null);
        } catch (e) {
            console.error("Failed to add student", e);
            codeupAlert("Failed to add student", codeupAlert.close);
        }
    };

    const addMentor = async (e) => {
        e.preventDefault();
        try {
            await api.post(`${BASE_URL}academy/${manageAcademyId}/mentor`, { name: selectedUser.name, email: selectedUser.email, picture: selectedUser.picture, userId: selectedUser.id });

            fetchMentors(manageAcademyId);
            setSelectedUser(null);
        } catch (e) {
            console.error("Failed to add mentor", e);
            codeupAlert("Failed to add mentor", codeupAlert.close);
        }
    };

    // const createMentor = async () => {
    //     try {
    //         await api.post(`${BASE_URL}academy/${manageAcademyId}/mentor`, mentorForm, {
    //             headers: { Authorization: `Bearer ${accessToken}` },
    //         });
    //         fetchMentors(manageAcademyId);
    //         setMentorForm({ name: "", email: "", picture: "", contactNumber: "", yearsOfExperience: "", areaOfExpertise: "" });
    //     } catch (err) {
    //         console.error("Create mentor error:", err.message);
    //     }
    // };

    const handleDelete = (id) => {
        codeupAlert(
            "Are you sure you want to delete this academy?",
            codeupAlert.close,
            <div className="d-flex justify-content-between w-100">
                <button className="btn btn-secondary" onClick={codeupAlert.close}>
                    Cancel
                </button>
                <button
                    className="btn btn-danger"
                    onClick={async () => {
                        codeupAlert();
                        try {
                            await api.delete(`${BASE_URL}academy/${id}`);
                            fetchAcademies();
                            codeupAlert.close();
                        } catch (err) {
                            console.error("Delete error:", err.message);
                            codeupAlert("There was an error in deleting the academy, try again later");
                        }
                    }}
                >
                    Delete
                </button>
            </div>
        );
        // if (window.confirm("Are you sure you want to delete this academy?")) {
        //     try {
        //         await api.delete(`${BASE_URL}academy/${id}`, {
        //             headers: { Authorization: `Bearer ${accessToken}` },
        //         });
        //         fetchAcademies();
        //     } catch (err) {
        //         console.error("Delete error:", err.message);
        //     }
        // }
    };

    const deleteStudent = async (studentId) => {
        try {
            await api.delete(`${BASE_URL}academy/${manageAcademyId}/student/${studentId}`);
            fetchStudents(manageAcademyId);
        } catch (err) {
            console.error("Delete student error:", err.message);
        }
    };

    const deleteMentor = async (mentorId) => {
        try {
            await api.delete(`${BASE_URL}mentor/${mentorId}`);
            fetchMentors(manageAcademyId);
        } catch (err) {
            console.error("Delete mentor error:", err.message);
        }
    };

    if (!academies)
        return (
            <div className="text-center">
                <Spinner animation="border" variant="secondary" />
            </div>
        );

    return (
        <div className="pb-4">
            <div className="d-flex justify-content-between align-items-center position-fixed bottom-0 end-0 p-4 pe-2 pe-md-4 mb-5 mb-md-0 z-3">
                {/* <span></span> */}
                <CodeupButton onClick={() => setShowModal(true)} className="p-3 rounded-circle lh-1">
                    <Plus size={20} strokeWidth={3} />
                </CodeupButton>
            </div>

            <div className="d-flex gap-2 flex-column">
                {academies.map((a, index) => (
                    <div className="bg-white shadow-sm rounded p-2" key={index}>
                        <div className="d-flex justify-content-between align-items-start gap-2 flex-column flex-sm-row">
                            <div className="">
                                <p className="m-0 fw-medium">{a.name}</p>
                                <p className="small m-0">{a.institution}</p>
                                <p className="small m-0">{a.contactNumber}</p>
                                <div className="d-flex align-items-center small gap-2">
                                    <span style={{ whiteSpace: "nowrap" }}>{formatDateForInput(a.startDate)}</span>
                                    <ArrowRight size={16} />
                                    <span style={{ whiteSpace: "nowrap" }}>{formatDateForInput(a.endDate)}</span>
                                </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-end align-self-end align-self-sm-start">
                                <Button variant="warning" size="sm" className="lh-1" onClick={() => handleEdit(a)}>
                                    <PencilIcon size={16} />
                                </Button>
                                <Button variant="danger" size="sm" className="lh-1" onClick={() => handleDelete(a.id)}>
                                    <TrashIcon size={16} />
                                </Button>
                                <Button variant="info" size="sm" className="lh-1" onClick={() => fetchStudents(a.id)}>
                                    <User size={16} />
                                </Button>
                                <Button variant="dark" size="sm" className="lh-1" onClick={() => fetchMentors(a.id)}>
                                    <GraduationCap size={16} />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div style={{ overflowX: "auto" }} className="mb-2">
                <Table className="m-0" bordered hover responsive>
                    <thead className="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Institution</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {academies.map((a) => (
                            <tr key={a.id}>
                                <td style={{ minWidth: 250 }}>{a.name}</td>
                                <td>{a.institution}</td>
                                <td style={{ whiteSpace: "nowrap" }}>{formatDateForInput(a.startDate)}</td>
                                <td style={{ whiteSpace: "nowrap" }}>{formatDateForInput(a.endDate)}</td>
                                <td>{a.contactNumber}</td>
                                <td>
                                    <div className="d-flex">
                                        <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(a)}>
                                            <PencilIcon size={16} />
                                        </Button>
                                        <Button variant="danger" size="sm" className="me-2" onClick={() => handleDelete(a.id)}>
                                            <TrashIcon size={16} />
                                        </Button>
                                        <Button variant="info" size="sm" className="me-2" onClick={() => fetchStudents(a.id)}>
                                            <User size={16} />
                                        </Button>
                                        <Button variant="dark" size="sm" onClick={() => fetchMentors(a.id)}>
                                            <GraduationCap size={16} />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div> */}

            <Modal
                show={showModal}
                size="lg"
                onHide={() => {
                    setShowModal(false);
                    setEditAcademy(null);
                    setForm(defaultForm);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{editAcademy ? "Edit Academy" : "Create Academy"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col-lg-6">
                                {["name", "institution", "contactNumber"].map((field) => (
                                    <Form.Group key={field} className="mb-3">
                                        <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                                        <Form.Control type="text" name={field} value={form[field]} onChange={handleChange} />
                                    </Form.Group>
                                ))}
                            </div>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" name="description" value={form.description} onChange={handleChange} style={{ height: "calc(100% - 32px)" }} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="date" name="startDate" value={form.startDate} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="date" name="endDate" value={form.endDate} onChange={handleChange} />
                            </Form.Group>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setShowModal(false);
                            setEditAcademy(null);
                        }}
                    >
                        Cancel
                    </Button>
                    <CodeupButton variant="primary" onClick={handleSubmit}>
                        {editAcademy ? "Update" : "Create"}
                    </CodeupButton>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showStudentModal}
                size="lg"
                onHide={() => {
                    setShowStudentModal(false);
                    setSelectedUser(null);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Students (Academy ID: {manageAcademyId})</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ overflowX: "auto" }} className="mb-2">
                        <Table className="m-0" bordered size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((s) => (
                                    <tr key={s.id}>
                                        <td className="d-flex align-items-center gap-2">
                                            <img src={s.picture} style={{ width: 30, height: 30, borderRadius: "100%" }} />
                                            <div className="d-flex flex-column">
                                                <span>{s.name}</span>
                                                <span className="small text-secondary">{s.email}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <Button variant="danger" size="sm" onClick={() => deleteStudent(s.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <h6>Add New Student</h6>

                    <div className="d-flex align-items-center gap-2 mt-2">
                        <form className="d-flex gap-2 w-100" onSubmit={addStudent}>
                            <AsyncSelect
                                cacheOptions
                                loadOptions={loadUserOptions}
                                defaultOptions
                                placeholder="Search user by name or email..."
                                value={selectedUser}
                                onChange={setSelectedUser}
                                getOptionLabel={(e) => `${e.name} (${e.email})`}
                                getOptionValue={(e) => e.id}
                                className="flex-grow-1"
                            />
                            <ResponsiveCodeupButton type="submit" className="" disabled={!selectedUser}>
                                Add
                            </ResponsiveCodeupButton>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                show={showMentorModal}
                size="lg"
                onHide={() => {
                    setShowMentorModal(false);
                    setSelectedUser(null);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Mentors (Academy ID: {manageAcademyId})</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ overflowX: "auto" }} className="mb-2">
                        <Table className="m-0" bordered size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mentors.map((m) => (
                                    <tr key={m.id}>
                                        <td className="d-flex align-items-center gap-2">
                                            <img src={m.picture} style={{ width: 30, height: 30, borderRadius: "100%" }} />
                                            <div className="d-flex flex-column">
                                                <span>{m.name}</span>
                                                <span className="small text-secondary">{m.email}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <Button variant="danger" size="sm" onClick={() => deleteMentor(m.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <h6>Add New Mentor</h6>

                    <div className="d-flex align-items-center gap-2 mt-2">
                        <form className="d-flex gap-2 w-100" onSubmit={addMentor}>
                            <AsyncSelect
                                cacheOptions
                                loadOptions={loadUserOptions}
                                defaultOptions
                                placeholder="Search user by name or email..."
                                value={selectedUser}
                                onChange={setSelectedUser}
                                getOptionLabel={(e) => `${e.name} (${e.email})`}
                                getOptionValue={(e) => e.id}
                                className="flex-grow-1"
                            />
                            <ResponsiveCodeupButton type="submit" disabled={!selectedUser}>
                                Add
                            </ResponsiveCodeupButton>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Academy;
