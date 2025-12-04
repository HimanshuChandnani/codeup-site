import { Fragment, useEffect, useState } from "react";
import Wrapper from "./style";
import { api } from "../../../auth/apiClient";
import Select from "react-select";
import { CloseButton } from "react-bootstrap";

const roleOptions = [
    { value: "user", label: "User", isFixed: true },
    { value: "admin", label: "Admin" },
    { value: "host", label: "Host" },
    { value: "creator", label: "Creator" },
    { value: "mentor", label: "Mentor" },
    { value: "student", label: "Student" },
    { value: "rr_organizer", label: "RR_Organizer" },
];

const Timesheets = () => {
    const [users, setUsers] = useState();
    const [totalUsers, setTotalUsers] = useState();
    const [maxPage, setMaxPage] = useState();
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [order, setOrder] = useState("asc");
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);
    const [timesheetDetails, setTimesheetDetails] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const params = {
                page,
                search,
                sortBy,
                order,
                role: selectedRoles.map((r) => r.value).join(","),
            };

            const response = await api.get("admin/users", {
                params,
            });

            const data = response.data;
            setUsers(data.users);
            setTotalUsers(data.totalUsers || 0);
            setMaxPage(data.totalPages || 1);
        } catch (error) {
            console.error("Error fetching users:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchTimesheet = async (userId) => {
            setTimesheetDetails(null);
            setLoadingDetails(true);
            try {
                const res = await api.get(`timesheet?userId=${userId}`);
                const data = res.data;

                const grouped = data.reduce((acc, entry) => {
                    const date = new Date(entry.createdAt).toLocaleDateString();
                    if (!acc[date]) acc[date] = [];
                    acc[date].push(entry);
                    return acc;
                }, {});
                setTimesheetDetails(grouped);
            } catch (e) {
                console.error(e);
                setTimesheetDetails(null);
            }
            setLoadingDetails(false);
        };
        if (selectedUser) {
            fetchTimesheet(selectedUser.id);
        }
    }, [selectedUser]);

    const updateDayStatus = (date, newStatus) => {
        setTimesheetDetails((prev) => {
            const updated = { ...prev };
            updated[date] = updated[date].map((entry) => ({
                ...entry,
                status: newStatus,
            }));
            return updated;
        });
    };

    const approveTimesheet = async (timesheetId, date) => {
        try {
            await api.put(`timesheet/approve/${timesheetId}`);
            updateDayStatus(date, "approved");
        } catch (e) {
            console.error(e);
        }
    };

    const rejectTimesheet = async (timesheetId, date) => {
        try {
            await api.put(`timesheet/reject/${timesheetId}`);
            updateDayStatus(date, "rejected");
        } catch (e) {
            console.error(e);
        }
    };

    const getDayStatus = (entries) => {
        const uniqueStatuses = [...new Set(entries.map((e) => e.status))];
        return uniqueStatuses.length === 1 ? uniqueStatuses[0] : "pending";
    };

    useEffect(() => {
        const timeOut = setTimeout(fetchUsers, 300);
        return () => clearTimeout(timeOut);
    }, [page, search, sortBy, order, selectedRoles]);

    const getPageNumbers = () => {
        const buttonCount = window.innerWidth > 500 ? 6 : 2;
        let start = Math.max(1, page - buttonCount / 2);
        let end = Math.min(maxPage, page + buttonCount / 2);

        // Ensure we always show 7 pages if possible
        if (end - start < buttonCount) {
            if (start === 1) {
                end = Math.min(maxPage, start + buttonCount);
            } else if (end === maxPage) {
                start = Math.max(1, end - buttonCount);
            }
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };
    return (
        <Wrapper>
            <div className="">
                <div className="row g-2 mb-2">
                    <div className="col-lg-6">
                        <input
                            className="form-control w-100"
                            placeholder="Search by name or email"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1); // reset page when searching
                            }}
                        />
                    </div>

                    <div className="col-lg-6">
                        <Select isMulti options={roleOptions} value={selectedRoles} onChange={setSelectedRoles} placeholder="Filter by roles" className="flex-grow-1" />
                    </div>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : users.length > 0 ? (
                    <>
                        <p className="fw-medium mb-1">Total results: {totalUsers}</p>
                        <div className="d-flex gap-2 pb-2">
                            <div className="d-flex flex-column gap-2 flex-1">
                                {users.map((user, index) => (
                                    <button key={index} className="rounded p-3 shadow-sm user-button" onClick={() => setSelectedUser(user)}>
                                        <div className="name">{user.name}</div>
                                        <div className="email small">{user.email}</div>
                                    </button>
                                ))}
                            </div>
                            {selectedUser && (
                                <div className="d-flex flex-column gap-3 bg-white rounded shadow-sm p-3 w-100 timesheet-details">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">{selectedUser.name}</h5>
                                        <CloseButton onClick={() => setSelectedUser(null)} />
                                    </div>

                                    <div className="d-flex flex-column gap-2 overflow-auto">
                                        {timesheetDetails ? (
                                            Object.entries(timesheetDetails).map(([date, entries]) => {
                                                const dayStatus = getDayStatus(entries);

                                                return (
                                                    <div key={date} className="card p-2">
                                                        <div className="d-lg-flex gap-3">
                                                            <div className="date float-end small d-lg-none">{date}</div>

                                                            <div className="flex-fill d-flex flex-column gap-1">
                                                                {entries.map((entry, index) => (
                                                                    <div key={index} className={`entry ${index < entries.length - 1 ? "mb-1 pb-1 border-bottom" : ""}`}>
                                                                        <div className="title small">
                                                                            <span className="fw-bold me-2">{entry.title}</span> <span>{entry.duration}h</span>
                                                                        </div>
                                                                        <div className="description small">{entry.description}</div>
                                                                        {/* <div className={`small text-muted`}>Status: {entry.status}</div> */}
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            <div className="d-flex flex-lg-column gap-1 align-items-center align-items-lg-stretch justify-content-end">
                                                                <div className="date small text-muted d-none d-lg-block">{date}</div>
                                                                <div className="total small fw-medium">Total: {entries.reduce((sum, e) => sum + e.duration, 0)}h</div>

                                                                {dayStatus.toLowerCase() === "pending" ? (
                                                                    <>
                                                                        <button className="btn btn-success btn-sm ms-auto" onClick={() => approveTimesheet(entries[0].id, date)}>
                                                                            Approve
                                                                        </button>
                                                                        <button className="btn btn-danger btn-sm" onClick={() => rejectTimesheet(entries[0].id, date)}>
                                                                            Reject
                                                                        </button>
                                                                    </>
                                                                ) : (
                                                                    <div
                                                                        className={`badge text-capitalize ${
                                                                            dayStatus.toLowerCase() === "approved" ? "bg-success-subtle text-success" : dayStatus.toLowerCase() === "rejected" ? "bg-danger-subtle text-danger" : "bg-warning-subtle text-warning"
                                                                        }`}
                                                                    >
                                                                        {dayStatus}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        ) : loadingDetails ? (
                                            <p>Loading...</p>
                                        ) : (
                                            <p>No Details available for this user</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center pb-3 flex-wrap flex-md-nowrap gap-2">
                            <button className="btn btn-secondary order-2 order-md-1" onClick={() => setPage((prev) => Math.max(1, prev - 1))} disabled={page <= 1}>
                                Previous
                            </button>
                            <span className="d-flex gap-1 order-1 w-100 justify-content-center">
                                {/* Page {page} of {maxPage} */}
                                <button className="btn btn-light border" onClick={() => setPage(1)}>
                                    {"<<"}
                                </button>
                                {getPageNumbers().map((number) => (
                                    <button className={`btn btn-light border ${page === number ? "active" : ""}`} key={number} onClick={() => setPage(number)}>
                                        {number}
                                    </button>
                                ))}
                                <button className="btn btn-light border" onClick={() => setPage(maxPage)}>
                                    {">>"}
                                </button>
                            </span>
                            <button className="btn btn-secondary order-2 order-md-1" onClick={() => setPage((prev) => Math.min(maxPage, prev + 1))} disabled={page >= maxPage}>
                                Next
                            </button>
                        </div>
                    </>
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </Wrapper>
    );
};

export default Timesheets;
