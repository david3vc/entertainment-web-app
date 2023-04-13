import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface MobileMenuToggleButtonProps {
    icon: string;
    handleClick: () => void;
}

export const MobileMenuToggleButton: React.FC<MobileMenuToggleButtonProps> = ({
    icon,
    handleClick,
}) => {
    return (
        <span
            className="mobile-nav-bar__toggle material-icons"
            id="mobile-menu-toggle-button"
            onClick={handleClick}
        >
            {/* {icon} */}
            <FontAwesomeIcon icon={faBars} />
        </span>
    );
};
