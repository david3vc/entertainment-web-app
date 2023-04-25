import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features: React.FC = () => {
    const featuresList = [
        {
            title: "Authentication with Auth0",
            description:
                "Securely and efficiently perform passwordless authentication using email, SMS, or a magic link.",
            resourceUrl: "https://auth0.com/es",
            icon: "https://www.svgrepo.com/show/341627/auth0.svg",
        },
        {
            title: "TMDB API",
            description:
                "The Movie Database (TMDB) is a community-created movie and TV database.",
            resourceUrl: "https://developers.themoviedb.org/3/getting-started/introduction",
            icon: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
        },
        {
            title: "Watch anywhere",
            description:
                "Enjoy from the web, on your phone or tablet, since it has the optimal design according to the screen size of your device.",
            resourceUrl: "",
            icon: "https://www.svgrepo.com/show/219298/responsive.svg",
        },
        {
            title: "Save series and movies",
            description:
                "Save what you want, when you want. Take your favorite stories always with you, even offline.",
            resourceUrl: "",
            icon: "https://www.svgrepo.com/show/96187/diskette.svg",
        },
    ];

    return (
        <div className="auth0-features">
            <h2 className="auth0-features__title">Explore Features</h2>
            <div className="auth0-features__grid">
                {featuresList.map((feature) => (
                    <Auth0Feature
                        key={feature.resourceUrl}
                        title={feature.title}
                        description={feature.description}
                        resourceUrl={feature.resourceUrl}
                        icon={feature.icon}
                    />
                ))}
            </div>
        </div>
    );
};
