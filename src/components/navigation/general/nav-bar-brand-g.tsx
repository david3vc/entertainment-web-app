import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrandG: React.FC = () => {
  return (
    <div className="nav-bar__brand1">
      <NavLink to="/">
        <img
          className="nav-bar__logo1"
          src="https://loquacious-druid-a2a12d.netlify.app/assets/logo-8c6ec767.svg"
          alt="Auth0 shield logo"
          width="36"
          height="36"
        />
      </NavLink>
    </div>
  );
};