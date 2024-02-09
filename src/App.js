import Home from "./Home";
import SurveyOne from "./components/SurveyOne";
import Results from "./components/Results";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const HomeLayout = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <h1 style={{color: "yellow"}}>loading...</h1>
    }

    return (<>
        <Home />
        <Footer />
    </>)
}

const PageLayout = ({ page, title }) => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <h1 style={{color: "yellow"}}>loading...</h1>
    }

    return (
    <>
        <main className="page">

              <a href="/" style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "2em" }}>
                <i className="arrowBackHome left"></i>
                <p style={{color: "yellow"}}>HOME</p>
              </a>
            <header className="pageHead">{title}</header>
            <div className="pageContent">
                <ProtectedRoute component={page} />
            </div>
        </main>
        <Footer />
    </>)
}

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout/>} />
        <Route path="/survey1" element={<PageLayout page={SurveyOne} title={"Welcome to Basic Survey!"} />} />
        <Route path="/results" element={<PageLayout page={Results} title={"Results"} />} />
      </Routes>
    </>
  );
};
