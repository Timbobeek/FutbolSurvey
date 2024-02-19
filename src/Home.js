import './App.css';
import './Home.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Content from './components/Content';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';

function Home() {
  const { isLoading, error } = useAuth0();

  useEffect(() => {
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

    function fixHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    fixHeight()
    window.addEventListener('resize', fixHeight)

    return () => {
      window.removeEventListener('resize', fixHeight)
    }
  }, [])

  return (
    <main className="welcome">
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro"></link> */}
        <h1 className='welcomeText'>Welcome!</h1>
        <p className='welcomeTextSmall'>to FutbolSurvey, <br></br> a page built to get to know my fellow <br></br>&#9917;futbol/soccer/football&#9917; enjoyers</p>
        {error && <p>Authentication Error</p>}
        {!error && isLoading}
        {!error && !isLoading && (
          <>
            <LoginButton/>
            <LogoutButton/>
            <Content/>
          </>
        )}
    </main>
  );
}

export default Home;
