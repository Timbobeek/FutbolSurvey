import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedContent } from "../isLoggedIn";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <ProtectedContent>
      <button className="logBtn" onClick={() => logout({
        logoutParams: {returnTo: window.location.origin}
      })}>
        Sign Out
      </button>
    </ProtectedContent>
  );
};

export default LogoutButton;
