import Home from "./Home";
import SurveyOne from "./components/SurveyOne";
import Results from "./components/Results";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import IsLoggedin from "./isLoggedin";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const HomeLayout = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <h1 className="loadingTxt">loading...</h1>
    }

    return (<>
        <Home />
        <Footer />
    </>)
}

// export default function isVerified(user) {
//   if (user == null) return false

//   if (user.email_verified === true) { // works for google, fb, microsoft
//     console.log('verfiied email')
//     return true
//   }

//   // if (user.email_verified == null && user.sub){ // for guthub
//   //   console.log('verified github')
//   //   return true
//   // }

//   return false
// }

const PageLayout = ({ page, title }) => {
    const { isLoading} = useAuth0();
    let redirect = useNavigate()

    //console.log('user data', user)

    if (isLoading) {
        return <h1 className="loadingTxt">loading...</h1>
    }

    if (!IsLoggedin()) {
      redirect('/')
      return
    }

    return (
    <>
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
    </>)
}

export const App = () => {

  return (
    <>
      <div className="backImg" />
      <Routes>
        <Route path="/" element={<HomeLayout/>} />
        <Route path="/survey1" element={<PageLayout page={SurveyOne} title={"Welcome to Basic Survey!"} />} />
        <Route path="/results" element={<PageLayout page={Results} title={"Results"} />} />
      </Routes>
    </>
  );
};
