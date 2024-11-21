import './App.css';
import './Home.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Content from './components/Content';
import { useAuth0 } from "@auth0/auth0-react";
import isVerified from './App';

// work on message when user is not verified!!!

function Home() {
  const { isLoading, user, error } = useAuth0();
  console.log('user', user)
  console.log('verified????', isVerified(user))
  return (
    <main className="welcome">
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro"></link> */}
        <h1 className='welcomeText'>Welcome!</h1>
        <p className='welcomeTextSmall'>to FutbolSurvey, <br></br> a page built to get to know my fellow <br></br>&#9917;futbol/soccer/football&#9917; enjoyers</p>
        {error && <p>Authentication Error</p>}
        {!error && isLoading}
        {!error && !isLoading && !isVerified(user) && (
          <>
            <LoginButton/>
            <LogoutButton/>
          </>
        )}
        {!error && !isLoading && isVerified(user) && (
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
