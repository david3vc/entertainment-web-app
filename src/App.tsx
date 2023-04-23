import { Route, Routes } from "react-router-dom";
import { CallbackPage } from "./pages/callback-page";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "./components/page-loader";
import { HomePage } from "./pages/home-page";
import { PublicPage } from "./pages/public-page";
import { AuthenticationGuard } from "./components/authentication-guard";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { AdminPage } from "./pages/admin-page";
import { NotFoundPage } from "./pages/not-found-page";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import {BookmarkListContextProvider} from "./context/BookmarkListContext";
import { useState } from "react";
import { MovieModel, PersonModel, TVSerieModel } from "./types";
import BookmarkList from "./pages/BookmarkList";
import Profile from "./pages/Profile";

export const App: React.FC = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="page-layout">
                <PageLoader />
            </div>
        );
    }
    return (
        <BookmarkListContextProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/profile"
                    element={<AuthenticationGuard component={Profile} />}
                />
                <Route path="/public" element={<HomePage />} />Movies
                <Route
                    path="/home"
                    element={<AuthenticationGuard component={Home} />}
                />
                <Route
                    path="/movies"
                    element={<AuthenticationGuard component={Movies} />}
                />
                <Route
                    path="/series"
                    element={<AuthenticationGuard component={Series} />}
                />
                <Route
                    path="/bookmarked-movies"
                    element={<AuthenticationGuard component={BookmarkList} />}
                />
                <Route
                    path="/protected"
                    element={<AuthenticationGuard component={ProtectedPage} />}
                />
                <Route
                    path="/admin"
                    element={<AuthenticationGuard component={AdminPage} />}
                />
                <Route path="/callback" element={<CallbackPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BookmarkListContextProvider>
    );
};
