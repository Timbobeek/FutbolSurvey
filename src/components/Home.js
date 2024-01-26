import { useAuth0 } from "@auth0/auth0-react";
import './Home.css';

//https://www.youtube.com/watch?v=QSBc8bABwE0&t=181s&ab_channel=DaveGray
//https://github.com/gitdagray/react-multi-step-form/blob/main/src/components/Form.js 


const Home = () => {
    const { isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
          <div className="Home">
            <h1 className="surveyHead">Choose a Survey Below</h1>

            <div className="survey1">
              <div className="leftSrvSide">
                <p className="surveyTitle">Basic Survey</p>
              </div>
              <div className="rightSrvSide">
                <a href="/results" className="resultsTxt">What Others Said</a>
                <a href="/survey1"><button id="surveyBtn">Start</button></a>
              </div>
            </div>

            <div className="survey2">
              <div className="leftSrvSide">
                <p className="surveyTitle">Survey #2</p>
              </div>
              <div className="rightSrvSide">
                <a href="/results" className="resultsTxt">What Others Said</a>
                <a href="/survey1"><button id="surveyBtn">Start</button></a>
              </div>
            </div>

            <div className="survey3">
              <div className="leftSrvSide">
                <p className="surveyTitle">Survey #3</p>
              </div>
              <div className="rightSrvSide">
                <a href="/results" className="resultsTxt">What Others Said</a>
                <a href="/survey1"><button id="surveyBtn">Start</button></a>
              </div>
            </div>
          </div>
        )
    )
}

  export default Home;