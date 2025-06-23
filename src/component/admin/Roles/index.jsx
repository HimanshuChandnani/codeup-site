import React, { useEffect, useState } from "react";
import axios from "axios";

const Roles = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiURL = "https://backend-auth-eosin.vercel.app/";
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        const fetchUsers = async () => {
            if (!token) {
                console.error("No token found. Admin access required.");
                return;
            }

            try {
                const response = await axios.get(`${apiURL}api/admin/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [token]);

    const handleRoleChange = async (userId, newRole) => {
        if (!token) return;

        try {
            await axios.patch(
                `${apiURL}api/admin/users/${userId}`,
                { role: newRole },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUsers(users.map((user) => (user._id === userId ? { ...user, role: newRole } : user)));
        } catch (error) {
            console.error("Error updating role:", error.response?.data || error.message);
        }
    };

    const handleDeleteUser = async (userId) => {
        if (!token) return;

        try {
            await axios.delete(`${apiURL}api/admin/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsers(users.filter((user) => user._id !== userId));
        } catch (error) {
            console.error("Error deleting user:", error.response?.data || error.message);
        }
    };

    if (loading) return <p className="text-muted">Loading...</p>;

    return (
        <div>
            {users.length > 0 ? (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <select className="form-control" value={user.role} onChange={(e) => handleRoleChange(user._id, e.target.value)}>
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                        <option value="host">Host</option>
                                        <option value="creator">Creator</option>
                                    </select>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm w-100" onClick={() => handleDeleteUser(user._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-muted">No users found.</p>
            )}
        </div>
    );
};

export default Roles;
