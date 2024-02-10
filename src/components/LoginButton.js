import { useAuth0 } from "@auth0/auth0-react";
import "./LogInOutButtons.css";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated} = useAuth0();
    return(
        !isAuthenticated && (
            <button className="logBtn" onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LoginButton;
