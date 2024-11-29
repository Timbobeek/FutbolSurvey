import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function isLoggedIn(isAuthenticated, user) {
  //add redirect to home page here as well?

  console.log({
    user,
    isAuthenticated
  })

  if (user == null || !isAuthenticated) return false;

  if (user.email_verified === true && isAuthenticated) {
    return true;
  }

  return false;
}

export function ProtectedContent({ children }) {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const redirect = useNavigate();

  const loggedIn = isLoggedIn(isAuthenticated, user)

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      console.log('redirecting to root')
      redirect("/");
    }
  }, [isLoading, loggedIn])

  if (isLoading) {
    return <h1 className="loadingTxt">loading...</h1>;
  }
  
  return loggedIn && children;
}
