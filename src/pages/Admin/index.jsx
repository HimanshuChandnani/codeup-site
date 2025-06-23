import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleSignInButton, { getUser, signOut } from "../../component/GoogleSigninButton";
import { NavDropdown, Tab, Tabs } from "react-bootstrap";
import Roles from "../../component/admin/Roles";
import News from "../../component/admin/News";
import CreatorApproval from "../../component/admin/CreatorApproval";
import UserQueries from "../../component/admin/UserQueries";

const AdminPage = () => {
    const [key, setKey] = useState("roles");
    const [user, setUser] = useState(getUser()?.user);
    const navigate = useNavigate();
    const adminId = user?._id;

    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="container mt-4">
            <div className="d-flex mb-4 align-items-center justify-content-between">
                <h2 className="mb-0">Admin Panel</h2>
                {user ? (
                    <NavDropdown title={<img src={user.picture} className="rounded-circle object-fit-cover ms-1" alt="Profile" height="40" width="40" />} id="profile-dropdown" align="end">
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#" onClick={signOut}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                ) : (
                    <GoogleSignInButton onSignIn={setUser} />
                )}
            </div>

            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="roles" title="Roles">
                    <Roles adminId={adminId} />
                </Tab>
                <Tab eventKey="news" title="News">
                    <News adminId={adminId} />
                </Tab>
                <Tab eventKey="creatorApproval" title="Creator Approval">
                    <CreatorApproval />
                </Tab>
                <Tab eventKey="userQueries" title="User Queries">
                    <UserQueries />
                </Tab>
            </Tabs>
        </div>
    );
};

export default AdminPage;
