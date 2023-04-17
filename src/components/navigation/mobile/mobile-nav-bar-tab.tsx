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
            // className={({ isActive }) =>
            //     "mobile-nav-bar__tab " +
            //     (isActive ? "mobile-nav-bar__tab--active" : "")
            // }
        >
            {/* {label} */}
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
