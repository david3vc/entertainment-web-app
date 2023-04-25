import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
// import { PageLoader } from "./PageLoader";
import PageLoading from "./PageLoading";

interface AuthenticationGuardProps {
  component: ComponentType;
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      // <div className="page-layout">
        // <PageLoader />
        <PageLoading />
      // </div>
    ),
  });

  return <Component />;
};
