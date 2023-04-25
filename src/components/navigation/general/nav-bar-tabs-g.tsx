import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTabG } from "./nav-bar-tab-g";

export const NavBarTabs: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__tabs1">
      {isAuthenticated && (
        <>
          <NavBarTabG path="/protected" label="Protected" />
          <NavBarTabG path="/admin" label="Admin" />
        </>
      )}
    </div>
  );
};