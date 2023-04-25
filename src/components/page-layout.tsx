import React from "react";
import { NavBar } from "./navigation/desktop/nav-bar";
import { MobileNavBar } from "./navigation/mobile/mobile-nav-bar";
import { PageFooter } from "./page-footer";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBarG } from "./navigation/general/nav-bar-g";

interface Props {
    children: JSX.Element;
}

export const PageLayout: React.FC<Props> = ({ children }) => {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div className="page-layout">
            {isAuthenticated ? <NavBar /> : <NavBarG />}
            <MobileNavBar />
            <div className={isAuthenticated ? 'page-layout__content margin-top' : 'page-layout__content'}>{children}</div>
            <PageFooter footerClass="footer-movil" />
        </div>
    );
};
