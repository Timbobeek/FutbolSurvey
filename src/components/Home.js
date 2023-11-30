import { useAuth0 } from "@auth0/auth0-react";
import './Home.css';
import Form from "./Form";

//https://www.youtube.com/watch?v=QSBc8bABwE0&t=181s&ab_channel=DaveGray
//https://github.com/gitdagray/react-multi-step-form/blob/main/src/components/Form.js 


const Home = () => {
    const { isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
          <div className="Home">
            <Form className="form" />
          </div>
        )
    )
}

  export default Home;