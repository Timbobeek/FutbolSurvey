import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SurveyOne from './components/SurveyOne';
import Results from './components/Results';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

root.render(
  <React.StrictMode>
        <BrowserRouter>
          <Auth0ProviderWithRedirectCallback domain={domain} clientId={clientId} authorizationParams={{redirectUri: window.location.origin}}>
            <Routes>
              <Route path='/' element={<App/>} />
              <Route path='/survey1' element={<SurveyOne/>} />
              <Route path='/results' element={<ProtectedRoute component={Results}/>}/>
            </Routes>
          </Auth0ProviderWithRedirectCallback>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
