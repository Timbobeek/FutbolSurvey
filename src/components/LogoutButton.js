import { useAuth0 } from "@auth0/auth0-react";
import IsLoggedin from "../isLoggedin";

const LogoutButton = () => {
    const { logout } = useAuth0();
    return(
        IsLoggedin() && (
            <button className="logBtn" onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default LogoutButton;