import { useAuth0 } from "@auth0/auth0-react";
import './Home.css';

//https://www.youtube.com/watch?v=QSBc8bABwE0&t=181s&ab_channel=DaveGray
//https://github.com/gitdagray/react-multi-step-form/blob/main/src/components/Form.js 


const Home = () => {
    const { isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
          <div className="Home">
            {/* <FormProvider>
              <Form className="form" />
            </FormProvider> */}
            <div className="survey1">
              <p className="surveyTitle">Survey 1</p>
              <a href="/survey1"><button className="genericBtn">Start</button></a>
              <a href="/results" className="text2">Results</a>
            </div>
          </div>
        )
    )
}

  export default Home;