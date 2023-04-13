import React from "react";
import { NavLink } from "react-router-dom";

interface MobileNavBarBrandProps {
  handleClick: () => void;
}

export const MobileNavBarBrand: React.FC<MobileNavBarBrandProps> = ({
  handleClick,
}) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src="https://loquacious-druid-a2a12d.netlify.app/assets/logo-8c6ec767.svg"
          alt="Auth0 shield logo"
          // width="82"
          // height="24"
        />
      </NavLink>
    </div>
  );
};
