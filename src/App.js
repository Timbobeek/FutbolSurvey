import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error} = useAuth0();
  return (
    <main className="welcome">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro"></link>
        <h1 className="welcomeText">Welcome!</h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading....</p>}
        {!error && !isLoading && (
          <>
            <LoginButton/>
            <LogoutButton/>
            <Home/>
          </>
        )}
    </main>
  );
}

export default App;
