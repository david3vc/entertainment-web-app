import React from "react";
import MobileNavBarLoading from "./navigation/mobile/MobileNavBarLoading";

interface Props {
    children: JSX.Element;
}

const PageLayoutLoading = ({ children }: Props) => {
    return (
        <div className="page-layout">
            <MobileNavBarLoading />
            <div className="page-layout__content">{children}</div>
        </div>
    );
};

export default PageLayoutLoading;
