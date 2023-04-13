import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://loquacious-druid-a2a12d.netlify.app/assets/logo-8c6ec767.svg"
          alt="Auth0 shield logo"
          // width="122"
          // height="36"
        />
      </NavLink>
    </div>
  );
};
