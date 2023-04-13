import React from "react";

export const HeroBanner: React.FC = () => {
    const logo =
        "https://loquacious-druid-a2a12d.netlify.app/assets/logo-8c6ec767.svg";

    return (
        // <div className="hero-banner hero-banner--pink-yellow">
        <div className="hero-banner hero-banner--prueba">
            <div className="hero-banner__logo">
                <img
                    className="hero-banner__image"
                    src={logo}
                    alt="React logo"
                />
            </div>
            <h1 className="hero-banner__headline">Entertainment Web App</h1>
            <p className="hero-banner__description">
                An application that shows all available movies and tv series.
            </p>
            <a
                id="code-sample-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/david3vc/entertainment-web-app.git"
                className="button button--secondary"
            >
                Check out the React code sample →
            </a>
        </div>
    );
};
