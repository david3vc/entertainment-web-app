import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

interface MobileMenuToggleButtonProps {
    icon: string;
    handleClick: () => void;
}

export const MobileMenuToggleButton: React.FC<MobileMenuToggleButtonProps> = ({
    icon,
    handleClick,
}) => {
    const { user } = useAuth0();

    if (!user) {
        return null;
    }

    return (
        <span
            className="mobile-nav-bar__toggle material-icons"
            id="mobile-menu-toggle-button"
            onClick={handleClick}
        >
            {/* {icon} */}
            {/* <FontAwesomeIcon icon={faBars} /> */}
            <img src={user.picture} alt="Profile" className="profile__avatar-menu" />
        </span>
    );
};
