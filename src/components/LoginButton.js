import { useAuth0 } from "@auth0/auth0-react";
import "./LogInOutButtons.css";
import IsLoggedin from "../isLoggedin";

const LoginButton = () => {
    const { loginWithRedirect} = useAuth0();
    return(
        !IsLoggedin() && (
            <button className="logBtn" onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LoginButton;
