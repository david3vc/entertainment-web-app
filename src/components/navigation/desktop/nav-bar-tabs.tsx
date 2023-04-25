import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";
import { MobileNavBarTab } from "../mobile/mobile-nav-bar-tab";
import iconoCategoryTv from '../../../assets/images/icon-nav-tv-series.svg'
import iconoCategoryMovie from '../../../assets/images/icon-nav-movies.svg'
import iconoHome from '../../../assets/images/icon-nav-home.svg'
import iconoBookmark from '../../../assets/images/icon-nav-bookmark.svg'

interface MobileNavBarTabsProps {
    handleClick?: () => void;
}

export const NavBarTabs: React.FC<MobileNavBarTabsProps> = ({
    handleClick,
}) => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="nav-bar__tabs">
            <NavBarTab
                path="/home"
                label="Profile"
                handleClick={handleClick}
                icon={iconoHome}
            />
            <NavBarTab
                path="/movies"
                label="Public"
                handleClick={handleClick}
                icon={iconoCategoryMovie}
            />
            {isAuthenticated && (
                <>
                    <NavBarTab
                        path="/series"
                        label="Protected"
                        handleClick={handleClick}
                        icon={iconoCategoryTv}
                    />
                    <NavBarTab
                        path="/bookmarked-movies"
                        label="Admin"
                        handleClick={handleClick}
                        icon={iconoBookmark}
                    />
                </>
            )}
        </div>
    );
};
