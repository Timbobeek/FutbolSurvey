import Home from "./Home";
import SurveyOne from "./components/SurveyOne";
import Results from "./components/Results";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedContent } from "./isLoggedIn";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const HomeLayout = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h1 className="loadingTxt">loading...</h1>;
  }

  return (
    <>
      <Home />
      <Footer />
    </>
  );
};


const PageLayout = ({ page, title }) => {
  return (
    <ProtectedContent>
      <main className="page">
        <a href="/" className="topHomeButton">
          <i className="topHomeButtonArrow left"></i>
          <p id="topHomeButtonText">HOME</p>
        </a>
        <header className="pageHead">{title}</header>
        <div className="pageContent">
          <ProtectedRoute component={page} />
        </div>
      </main>
      <Footer />
    </ProtectedContent>
  );
};

export const App = () => {
  const { error } = useAuth0();

  return (
    <>
      <div className="backImg" />
      {error && <p>Authentication Error</p>}
      {!error && (<Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route
          path="/survey1"
          element={
            <PageLayout page={SurveyOne} title={"Welcome to Basic Survey!"} />
          }
        />
        <Route
          path="/results"
          element={<PageLayout page={Results} title={"Results"} />}
        />
      </Routes>)}
    </>
  );
};
