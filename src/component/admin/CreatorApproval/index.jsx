"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Form, Spinner } from "react-bootstrap";
import { getUser } from "../../GoogleSigninButton";

const CreatorApproval = () => {
    const [creators, setCreators] = useState([]);
    const [filterStatus, setFilterStatus] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState({});

    useEffect(() => {
        fetchCreators();
    }, []);

    const fetchCreators = async () => {
        setLoading(true);
        try {
            const res = await axios.get("https://codeup.in/dev/admin/creators");
            setCreators(res.data || []);
        } catch (error) {
            console.error("Failed to fetch creators", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async (id, action, email) => {
        setActionLoading((prev) => ({ ...prev, [id]: true }));
        try {
            // Call new backend API to change status
            await axios.post(`https://codeup.in/dev/admin/creators/${id}/${action}`);

            // For "approve" action, also update the role in the old backend by email
            if (email) {
                await axios.patch(
                    `https://backend-auth-eosin.vercel.app/api/admin/users-by-email/${encodeURIComponent(email)}`,
                    {
                        role: action === "approve" ? "creator" : "user",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${getUser()?.token}`,
                        },
                    }
                );
            }

            // Update the local state after successful API calls
            setCreators((prev) => prev.map((creator) => (creator.id === id ? { ...creator, status: action === "approve" ? "approved" : "rejected" } : creator)));
        } catch (error) {
            console.error(`Failed to ${action} creator`, error);
        } finally {
            setActionLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const filteredCreators = creators.filter((creator) => {
        const matchesStatus = filterStatus === "all" || creator.status === filterStatus;
        const matchesSearch = Object.values(creator).join(" ").toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    return (
        <div className="container py-4">
            <h2 className="mb-4">Creator Approval Panel</h2>

            <div className="d-flex flex-wrap gap-3 mb-4">
                <Form.Select style={{ maxWidth: 200 }} value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </Form.Select>

                <Form.Control type="search" placeholder="Search by any field..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ maxWidth: 300 }} />
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border" />
                </div>
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>LinkedIn</th>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Experience</th>
                            <th>Teaching Exp.</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCreators.length === 0 ? (
                            <tr>
                                <td colSpan="12" className="text-center text-muted">
                                    No matching creators found.
                                </td>
                            </tr>
                        ) : (
                            filteredCreators.map((creator, index) => (
                                <tr key={creator.id}>
                                    <td>{index + 1}</td>
                                    <td>{creator.name}</td>
                                    <td>{creator.email}</td>
                                    <td>{creator.mobile}</td>
                                    <td>
                                        <a href={creator.linkedin} target="_blank" rel="noopener noreferrer">
                                            LinkedIn
                                        </a>
                                    </td>
                                    <td>{creator.job_title}</td>
                                    <td>{creator.company}</td>
                                    <td>{creator.experience_years} yrs</td>
                                    <td>{creator.teaching_experience}</td>
                                    <td>
                                        <span className={`badge bg-${getStatusColor(creator.status)}`}>{creator.status}</span>
                                    </td>
                                    <td>{new Date(creator.created_at).toLocaleString()}</td>
                                    <td>
                                        <div className="d-flex">
                                            {creator.status !== "approved" && (
                                                <Button variant="success" size="sm" className="me-2" disabled={actionLoading[creator.id]} onClick={() => handleAction(creator.id, "approve", creator.email)}>
                                                    {actionLoading[creator.id] ? "Approving..." : "Approve"}
                                                </Button>
                                            )}
                                            {creator.status !== "rejected" && (
                                                <Button variant="danger" size="sm" disabled={actionLoading[creator.id]} onClick={() => handleAction(creator.id, "reject")}>
                                                    {actionLoading[creator.id] ? "Rejecting..." : "Reject"}
                                                </Button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

function getStatusColor(status) {
    switch (status) {
        case "approved":
            return "success";
        case "rejected":
            return "danger";
        case "pending":
        default:
            return "warning";
    }
}

export default CreatorApproval;
