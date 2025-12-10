import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavDropdown, Nav } from "react-bootstrap";
import Roles from "../../component/admin/Roles";
import CreatorApproval from "../../component/admin/CreatorApproval";
import UserQueries from "../../component/admin/UserQueries";
import Wrapper from "./style";
import Academy from "../../component/admin/Acadamy";
import NotifyUsers from "../../component/admin/NoifyUsers";
import { UserCheck, Users, LucideFileQuestion, GraduationCap, Bell, Calendar } from "lucide-react";
import { useAuth } from "../../auth/useAuth";
import { CodeupButton } from "../../component/StyledComponents/style";
import Timesheets from "../../component/admin/Timesheets";

const AdminPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // get tab key from URL or fallback to "roles"
    const urlParams = new URLSearchParams(location.search);
    const defaultTab = urlParams.get("tab") || "roles";

    const [key, setKey] = useState(defaultTab);
    const { user, login, logout } = useAuth();

    // redirect non-admins
    useEffect(() => {
        if (!user || !user.role.includes("admin")) {
            navigate("/");
        }
    }, [user, navigate]);

    // update URL param when tab changes
    const handleSelect = (k) => {
        setKey(k);
        const params = new URLSearchParams(location.search);
        params.set("tab", k);
        navigate({ search: params.toString() });
    };

    // render current tab content
    const renderContent = () => {
        switch (key) {
            case "roles":
                return <Roles />;
            case "creatorApproval":
                return <CreatorApproval />;
            case "userQueries":
                return <UserQueries />;
            case "academy":
                return <Academy />;
            case "notify":
                return <NotifyUsers />;
            case "timesheet":
                return <Timesheets />;
            default:
                return <Roles />;
        }
    };

    const tabs = [
        { eventKey: "roles", label: "Roles", phone: "Roles", icon: <Users /> },
        { eventKey: "creatorApproval", label: "Creator Approval", phone: "Creator", icon: <UserCheck /> },
        { eventKey: "userQueries", label: "User Queries", phone: "Queries", icon: <LucideFileQuestion /> },
        { eventKey: "academy", label: "Academy", phone: "Academy", icon: <GraduationCap /> },
        { eventKey: "notify", label: "Notify Users", phone: "Notify", icon: <Bell /> },
        { eventKey: "timesheet", label: "Timesheet", phone: "Sheet", icon: <Calendar /> },
    ];

    return (
        <Wrapper>
            {/* Header */}
            <div className="mb-4 py-2 bg-white">
                <div className="container d-flex align-items-center justify-content-between">
                    <h3 className="mb-0">Admin Panel</h3>
                    {user ? (
                        <NavDropdown title={<img src={user.picture} className="rounded-circle object-fit-cover ms-1" alt="Profile" height="40" width="40" />} id="profile-dropdown" align="end">
                            <NavDropdown.Item href="#" onClick={logout}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <CodeupButton onClick={login}>Sign in</CodeupButton>
                    )}
                </div>
            </div>

            <div className="container">
                {/* Fixed Bottom Nav for Mobile */}
                <Nav variant="tabs" activeKey={key} onSelect={handleSelect} className="admin-bottom-nav d-md-none">
                    {tabs.map((tab) => (
                        <Nav.Item key={tab.eventKey}>
                            <Nav.Link eventKey={tab.eventKey} className="d-flex flex-column align-items-center justify-content-center">
                                <span>{tab.icon}</span>
                                <span style={{ fontSize: 11, marginTop: 2 }}>{tab.phone}</span>
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>

                {/* Top Tabs for Desktop */}
                <Nav variant="tabs" activeKey={key} onSelect={handleSelect} className="admin-top-nav d-none d-md-flex mb-3">
                    {tabs.map((tab) => (
                        <Nav.Item key={tab.eventKey}>
                            <Nav.Link eventKey={tab.eventKey}>{tab.label}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                {/* Content */}
                <div className="tab-content-area">{renderContent()}</div>
            </div>
        </Wrapper>
    );
};

export default AdminPage;
