import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/signup-button";
import { NavLink } from "react-router-dom";

export const NavBarButtons: React.FC = () => {
    const { isAuthenticated, user } = useAuth0();
    if (!user) {
        return null;
    }

    return (
        <div className="nav-bar__buttons">
            {!isAuthenticated && (
                <>
                    <SignupButton />
                    <LoginButton />
                </>
            )}
            {isAuthenticated && (
                <>
                    <NavLink to="/profile" className="nav-bar-profile">
                    <img
                            src={user.picture}
                            alt="Profile"
                            className="nav-bar-profile__avatar"
                        />
                    </NavLink>
                </>
            )}
        </div>
    );
};
