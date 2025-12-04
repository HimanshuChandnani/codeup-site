"use client";

import { useEffect, useState } from "react";
import { Table, Button, Form, Spinner } from "react-bootstrap";
import Select from "react-select";
import { useAuth } from "../../../auth/useAuth";
import { api } from "../../../auth/apiClient";

const filterOptions = [
    { value: "all", label: "All Status" },
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "rejected", label: "Rejected" },
];

const CreatorApproval = () => {
    const [creators, setCreators] = useState([]);
    const [filterStatus, setFilterStatus] = useState(filterOptions[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState({});
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { accessToken } = useAuth();

    useEffect(() => {
        fetchCreators();
    }, []);

    const fetchCreators = async () => {
        setLoading(true);
        try {
            const res = await api.get(`${BASE_URL}admin/creators`);
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
            await api.post(`${BASE_URL}admin/creators/${id}/${action}`, null);

            // Update the local state after successful API calls
            setCreators((prev) => prev.map((creator) => (creator.id === id ? { ...creator, status: action === "approve" ? "approved" : "rejected" } : creator)));
        } catch (error) {
            console.error(`Failed to ${action} creator`, error);
        } finally {
            setActionLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const filteredCreators = creators.filter((creator) => {
        const matchesStatus = filterStatus.value === "all" || creator.status === filterStatus.value;
        const matchesSearch = Object.values(creator).join(" ").toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    useEffect(() => {
        console.log(filterStatus);
    }, [filterStatus]);

    return (
        <div className="pb-4">
            <div className="row g-2 mb-2">
                {/* <Form.Select style={{ maxWidth: 200 }} value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </Form.Select> */}
                <div className="col-lg-6">
                    <Form.Control type="search" placeholder="Search by any field..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="col-lg-6">
                    <Select options={filterOptions} value={filterStatus} onChange={setFilterStatus} />
                </div>
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
                            {/* <th>Email</th> */}
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
                                    <td>
                                        <div>{creator.name}</div>
                                        <div className="small text-secondary">{creator.email}</div>
                                    </td>
                                    {/* <td>{creator.email}</td> */}
                                    <td>{creator.mobile}</td>
                                    <td>
                                        <a href={creator.linkedin} target="_blank" rel="noopener noreferrer">
                                            LinkedIn
                                        </a>
                                    </td>
                                    <td>{creator.job_title}</td>
                                    <td>{creator.company}</td>
                                    <td>{creator.experience_years} yrs</td>
                                    <td style={{ maxWidth: 300, overflowWrap: "break-word" }}>{creator.teaching_experience}</td>
                                    <td>
                                        <span className={`badge bg-${getStatusColor(creator.status)}`}>{creator.status}</span>
                                    </td>
                                    <td style={{ whiteSpace: "nowrap" }}>{new Date(creator.created_at).toLocaleString()}</td>
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
