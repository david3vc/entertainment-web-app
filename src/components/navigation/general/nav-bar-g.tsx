import React from "react";
import { NavBarBrandG } from "./nav-bar-brand-g";
import { NavBarButtonsG } from "./nav-bar-buttons-g";
import { NavBarTabs } from "./nav-bar-tabs-g";

export const NavBarG: React.FC = () => {
  return (
    <div className="nav-bar__container1">
      <nav className="nav-bar1">
        <NavBarBrandG />
        <NavBarTabs />
        <NavBarButtonsG />
      </nav>
    </div>
  );
};