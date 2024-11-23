import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate, BrowserRouter } from "react-router-dom";
import { App } from "./App";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));

const Auth0ProviderWithRedirectCallback = ({ children }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider
      onRedirectCallback={onRedirectCallback}
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirectUri: window.location.origin }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback>
        <App />
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
