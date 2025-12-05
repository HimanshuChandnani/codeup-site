"use client";

import { useEffect, useState } from "react";
import { Table, Button, Form, Spinner, Card } from "react-bootstrap";
import Select from "react-select";
import { useAuth } from "../../../auth/useAuth";
import { api } from "../../../auth/apiClient";
import { Check, Delete, Info, Loader, Trash } from "lucide-react";

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
    const [expandedCards, setExpandedCards] = useState({});

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
                <div className="text-center">
                    <Spinner animation="border" />
                </div>
            ) : (
                <div className="d-flex flex-column gap-2 users">
                    {filteredCreators.length === 0 ? (
                        <div className="text-center text-muted">No matching creators found.</div>
                    ) : (
                        filteredCreators.map((creator, index) => {
                            const isOpen = expandedCards[creator.id] || false;

                            return (
                                <div className="" key={creator.id}>
                                    <div className="shadow-sm h-100 bg-white rounded">
                                        <div className="p-2">
                                            {/* Header row with name & info button */}
                                            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                                                <div className="overflow-hidden">
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <a href={creator.linkedin} className="text-black text-decoration-none">
                                                            <p className="mb-0 fw-medium">{creator.name} </p>
                                                        </a>
                                                        <span className={`badge lh-sm bg-${getStatusColor(creator.status)}`} style={{ fontSize: "0.6rem" }}>
                                                            {creator.status}
                                                        </span>
                                                    </div>

                                                    <div className="text-secondary small text-truncate">{creator.email}</div>
                                                </div>

                                                <div className="d-flex justify-content-end flex-fill gap-2">
                                                    <Button
                                                        variant="light"
                                                        size="sm"
                                                        onClick={() =>
                                                            setExpandedCards((prev) => ({
                                                                ...prev,
                                                                [creator.id]: !prev[creator.id],
                                                            }))
                                                        }
                                                    >
                                                        <Info size={18} />
                                                    </Button>
                                                    {creator.status !== "approved" && (
                                                        <Button variant="success" size="sm" className="lh-1" disabled={actionLoading[creator.id]} onClick={() => handleAction(creator.id, "approve", creator.email)}>
                                                            {actionLoading[creator.id] ? <Loader size={16} /> : <Check size={16} />}
                                                        </Button>
                                                    )}

                                                    {creator.status !== "rejected" && (
                                                        <Button variant="danger" size="sm" className="lh-1" disabled={actionLoading[creator.id]} onClick={() => handleAction(creator.id, "reject")}>
                                                            {actionLoading[creator.id] ? <Loader size={16} /> : <Trash size={16} />}
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>

                                            {isOpen && (
                                                <div className="small mt-2">
                                                    {[
                                                        { label: "Mobile", value: creator.mobile },
                                                        { label: "Job Title", value: creator.job_title },
                                                        { label: "Comany", value: creator.company },
                                                        { label: "Experience", value: `${creator.experience_years} yrs` },
                                                        { label: "Teaching Exp", value: creator.teaching_experience },
                                                        { label: "Created", value: new Date(creator.created_at).toLocaleString() },
                                                    ].map(({ label, value }, index) => (
                                                        <div key={index}>
                                                            <span className="fw-medium">{label}:</span> {value}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
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
