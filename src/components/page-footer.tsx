import { PageFooterHyperlink } from "./page-footer-hyperlink";
import iconoGitHub from "../assets/images/logo-github.svg";

interface IPageFooter {
    footerClass: string;
}

export const PageFooter = ({footerClass}:IPageFooter) => {
    return (
        <footer className={`page-footer ${footerClass}`}>
            <div className="page-footer-grid">
                <div className="page-footer-grid__brand">
                    <div className="page-footer-brand">
                        <img
                            className="page-footer-brand__logo"
                            // src={iconoGitHub}
                            src="https://www.svgrepo.com/show/512317/github-142.svg"
                            alt="Auth0"
                            width="30"
                            height="32.22"
                        />
                        <PageFooterHyperlink path="https://github.com/david3vc">
                            <>david3vc</>
                        </PageFooterHyperlink>
                    </div>
                </div>
            </div>
        </footer>
    );
};
