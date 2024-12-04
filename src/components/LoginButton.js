import { useAuth0 } from "@auth0/auth0-react";
import "./LogInOutButtons.css";
import { isLoggedIn } from "../isLoggedIn";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    !isLoggedIn(isAuthenticated, user) && (
      <button className="logBtn" onClick={() => loginWithRedirect()}>
        Sign In
      </button>
    )
  );
};

export default LoginButton;
