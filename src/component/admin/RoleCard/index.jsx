import Select from "react-select";
import Wrapper from "./style";

const roleOptions = [
    { value: "user", label: "User", isFixed: true },
    { value: "admin", label: "Admin" },
    { value: "host", label: "Host" },
    { value: "creator", label: "Creator" },
    { value: "mentor", label: "Mentor" },
    { value: "student", label: "Student" },
];

const RoleCard = ({ user, handleRoleChange }) => {
    return (
        <Wrapper className="rounded bg-white p-3 shadow-sm">
            <div className="name">{user.name}</div>
            <div className="email mb-2">{user.email}</div>
            <Select
                isMulti
                //
                options={roleOptions}
                value={roleOptions.filter((r) => user.role.includes(r.value))}
                onChange={(newRoles) => handleRoleChange(user.id, newRoles)}
                className="w-100 border-none"
                isClearable={false}
                closeMenuOnSelect={false}
            />
        </Wrapper>
    );
};

export default RoleCard;
