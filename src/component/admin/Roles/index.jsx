import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { getUser } from "../../GoogleSigninButton";
import { codeupAlert } from "../../Alert";

const roleOptions = [
    { value: "user", label: "User", isFixed: true },
    { value: "admin", label: "Admin" },
    { value: "host", label: "Host" },
    { value: "creator", label: "Creator" },
    { value: "mentor", label: "Mentor" },
    { value: "student", label: "Student" },
];

const Roles = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [order, setOrder] = useState("asc");
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const BASE_URL = process.env.REACT_APP_API_URL;
    // const BASE_URL = "https://dev.codeup.in/dev/";

    const apiURL = `${BASE_URL}admin/users`;

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

            const response = await axios.get(apiURL, {
                headers: { Authorization: `Bearer ${getUser()?.token}` },
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
        const timeOut = setTimeout(fetchUsers, 300);
        return () => clearTimeout(timeOut);
    }, [page, search, sortBy, order, selectedRoles]);

    const toggleSort = (field) => {
        if (sortBy === field) {
            setOrder(order === "asc" ? "desc" : "asc");
        } else {
            setSortBy(field);
            setOrder("asc");
        }
    };

    // const handleRoleChange = async (userId, newRoles) => {
    //     const roleValues = newRoles.map((role) => role.value);
    //     try {
    //         await axios.patch(
    //             `${apiURL}/${userId}`,
    //             { role: roleValues },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${getUser()?.token}`,
    //                 },
    //             }
    //         );
    //         setUsers(users.map((user) => (user.id === userId ? { ...user, role: roleValues } : user)));
    //     } catch (error) {
    //         console.error("Error updating role:", error.response?.data || error.message);
    //     }
    // };

    const handleRoleChange = async (userId, newRoles) => {
        // Always keep fixed roles (like "user")
        const enforcedRoles = roleOptions
            .filter((r) => r.isFixed) // get fixed roles
            .concat(newRoles.filter((r) => !r.isFixed)); // add only non-fixed roles

        const roleValues = enforcedRoles.map((role) => role.value);

        const updateRoles = async () => {
            try {
                await axios.patch(
                    `${apiURL}/${userId}`,
                    { role: roleValues },
                    {
                        headers: {
                            Authorization: `Bearer ${getUser()?.token}`,
                        },
                    }
                );

                setUsers(users.map((user) => (user.id === userId ? { ...user, role: roleValues } : user)));
            } catch (error) {
                console.error("Error updating role:", error.response?.data || error.message);
            }
        };

        if (userId === getUser()?.user.id && !newRoles.includes("admin")) {
            codeupAlert(
                "You won't be able to access this page if you remove your admin role",
                codeupAlert.close,
                <div className="d-flex justify-content-between w-100">
                    <button className="btn btn-secondary" onClick={codeupAlert.close}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            updateRoles();
                            codeupAlert.close();
                        }}
                    >
                        Remove
                    </button>
                </div>
            );
        } else {
            updateRoles();
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`${apiURL}/${userId}`, {
                headers: { Authorization: `Bearer ${getUser()?.token}` },
            });
            setUsers(users.filter((user) => user.id !== userId));
        } catch (error) {
            console.error("Error deleting user:", error.response?.data || error.message);
        }
    };

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
        <div className="container">
            <div className="row row-gap-3 mb-3">
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
                    <h5>Total results: {totalUsers}</h5>
                    <div style={{ overflowX: "auto" }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th onClick={() => toggleSort("name")} style={{ cursor: "pointer" }}>
                                        Name {sortBy === "name" && (order === "asc" ? "↑" : "↓")}
                                    </th>
                                    {/* <th onClick={() => toggleSort("email")} style={{ cursor: "pointer" }}>
                                    Email {sortBy === "email" && (order === "asc" ? "↑" : "↓")}
                                </th> */}
                                    <th>Role</th>
                                    {/* <th>Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => {
                                    const selectedRoles = roleOptions.filter((r) => user.role.includes(r.value));

                                    return (
                                        <tr key={user.id}>
                                            <td>
                                                <div>{user.name}</div>
                                                <div className="small text-secondary">{user.email}</div>
                                            </td>
                                            {/* <td></td> */}
                                            <td style={{ minWidth: 200 }}>
                                                <Select
                                                    isMulti
                                                    options={roleOptions}
                                                    value={roleOptions.filter((r) => user.role.includes(r.value))}
                                                    onChange={(newRoles) => handleRoleChange(user.id, newRoles)}
                                                    className="w-100"
                                                    isClearable={false}
                                                    closeMenuOnSelect={false}
                                                />
                                            </td>
                                            {/* <td>
                                            <button className="btn btn-danger btn-sm w-100" onClick={() => handleDeleteUser(user.id)}>
                                                Delete
                                            </button>
                                        </td> */}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
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
    );
};

export default Roles;
