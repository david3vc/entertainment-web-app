import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import iconoCategoryTv from '../../../assets/images/icon-nav-tv-series.svg'
import iconoCategoryMovie from '../../../assets/images/icon-nav-movies.svg'
import iconoHome from '../../../assets/images/icon-nav-home.svg'
import iconoBookmark from '../../../assets/images/icon-nav-bookmark.svg'
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

interface MobileNavBarTabsProps {
    handleClick: () => void;
}

export const MobileNavBarTabs: React.FC<MobileNavBarTabsProps> = ({
    handleClick,
}) => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="mobile-nav-bar__tabs">
            <MobileNavBarTab
                path="/home"
                label="Profile"
                handleClick={handleClick}
                icon={iconoHome}
            />
            <MobileNavBarTab
                path="/public"
                label="Public"
                handleClick={handleClick}
                icon={iconoCategoryMovie}
            />
            {isAuthenticated && (
                <>
                    <MobileNavBarTab
                        path="/protected"
                        label="Protected"
                        handleClick={handleClick}
                        icon={iconoCategoryTv}
                    />
                    <MobileNavBarTab
                        path="/admin"
                        label="Admin"
                        handleClick={handleClick}
                        icon={iconoBookmark}
                    />
                </>
            )}
        </div>
    );
};
