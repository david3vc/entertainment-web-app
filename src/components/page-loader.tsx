import React from "react";
import { PageLayout } from "./page-layout";
import LoadingTrending from "./LoadingTrending";
import LoadingList from "./LoadingList";

export const PageLoader: React.FC = () => {
    const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

    return (
        <PageLayout>
            <>
                <LoadingTrending />
                <LoadingList />
            </>
        </PageLayout>
    );
};
