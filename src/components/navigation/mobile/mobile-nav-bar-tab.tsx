import React from "react";
import { NavLink } from "react-router-dom";

interface MobileNavBarTabProps {
    path: string;
    label: string;
    icon: string;
    handleClick: () => void;
}

export const MobileNavBarTab: React.FC<MobileNavBarTabProps> = ({
    path,
    label,
    icon,
    handleClick,
}) => {
    return (
        <NavLink
            onClick={handleClick}
            to={path}
            end
        >
            {
                icon !== "" ? (
                    <img src={icon} alt="" />
                ) : (
                    <span className="">{label}</span>
                )
            }
        </NavLink>
    );
};
