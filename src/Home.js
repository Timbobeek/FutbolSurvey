import "./App.css";
import "./Home.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Content from "./components/Content";

function Home() {
  return (
    <main className="welcome">
      <h1 className="welcomeText">Welcome!</h1>
      <p className="welcomeTextSmall">
        to FutbolSurvey, <br></br> a page built to get to know my fellow{" "}
        <br></br>&#9917;futbol/soccer/football&#9917; enjoyers
      </p>
      <>
        <LoginButton />
        <LogoutButton />
        <Content />
      </>
    </main>
  );
}

export default Home;
