import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarTabProps {
    path: string;
    label: string;
    icon: string;
    handleClick?: () => void;
}

export const NavBarTab: React.FC<NavBarTabProps> = ({
    path,
    label,
    handleClick,
    icon,
}) => {
    return (
        <NavLink
            onClick={handleClick}
            to={path}
            end
        >
            {icon !== "" ? (
                <img src={icon} alt="" />
            ) : (
                <span className="">{label}</span>
            )}
        </NavLink>
    );
};
