import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MobileNavBarBrand } from "./mobile-nav-bar-brand";

const MobileNavBarLoading = () => {
    return (
        <div className="mobile-nav-bar__container">
            <nav className="mobile-nav-bar">
                <MobileNavBarBrand handleClick={() => {}} />
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                <Skeleton borderRadius={15} height={35} width={160} />
                </SkeletonTheme>
                <SkeletonTheme baseColor="#161d2f" highlightColor="#5a698f">
                    <Skeleton borderRadius={15} height={35} width={35} />
                </SkeletonTheme>
            </nav>
        </div>
    );
};

export default MobileNavBarLoading;
