import { useAuth0 } from "@auth0/auth0-react";

const IsLoggedin = () => {

  const {isAuthenticated, user} = useAuth0()

  //add redirect to home page here as well?

  if (user == null || !isAuthenticated) return false

  if (user.email_verified === true && isAuthenticated){
    return true
  }

  return false

}

export default IsLoggedin;


