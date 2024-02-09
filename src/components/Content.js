import { useAuth0 } from "@auth0/auth0-react";
import './Content.css';


const Content = () => {
    const { isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
          <div className="Home">
            {/* <h1 className="surveyHead">Choose a Survey Below</h1> */}

            <div className="surveyBoard1">
              <div className="leftSrvSide">
                <p className="surveyTitle">Basic Survey</p>
              </div>
              <div className="rightSrvSide">
                <a href="/results" className="resultsTxt">What Others Said</a>
                <a href="/survey1"><button id="surveyBtn">Start</button></a>
              </div>
            </div>

            <div className="surveyBoard2">
              <div className="leftSrvSide">
                <p className="surveyTitle">Survey #2</p>
              </div>
              <div className="rightSrvSide">
                <p className="surveyTitle"> Coming Soon</p>
              </div>
            </div>

            <div className="surveyBoard3">
              <div className="leftSrvSide">
                <p className="surveyTitle">Survey #3</p>
              </div>
              <div className="rightSrvSide">
                <p className="surveyTitle"> Coming Soon</p>
              </div>
            </div>
          </div>
        )
    )
}

  export default Content;