import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import "./styles/styles.css";
import { App } from "./App";

library.add(fas, far);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0ProviderWithNavigate>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </Auth0ProviderWithNavigate>
        </BrowserRouter>
    </React.StrictMode>
);
