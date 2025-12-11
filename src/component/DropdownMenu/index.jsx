import React, { useState, useEffect, useRef } from "react";
import { PencilIcon, TrashIcon, User, GraduationCap, MoreVertical } from "lucide-react";

const DropdownMenu = ({ children }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="position-relative" ref={ref}>
            <button
                className="btn btn-light btn-sm"
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                }}
            >
                <MoreVertical size={18} />
            </button>

            {open && (
                <div
                    className="shadow-sm bg-white position-absolute end-0 mt-1 p-2"
                    style={{
                        minWidth: "150px",
                        borderRadius: "6px",
                        zIndex: 1000,
                    }}
                >
                    {/* <div className="dropdown-item-custom" onClick={onEdit}>
                        <PencilIcon size={16} /> Edit
                    </div>
                    <div className="dropdown-item-custom text-danger" onClick={onDelete}>
                        <TrashIcon size={16} /> Delete
                    </div>
                    <div className="dropdown-item-custom" onClick={onStudents}>
                        <User size={16} /> Students
                    </div>
                    <div className="dropdown-item-custom" onClick={onMentors}>
                        <GraduationCap size={16} /> Mentors
                    </div> */}
                    {children}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
