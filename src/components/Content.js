import "./Content.css";
import { ProtectedContent } from "../isLoggedIn";

const Content = () => {
  return (
    <ProtectedContent>
      <div className="surveyBoards">
        <div className="surveyBoard1">
          <div className="leftSrvSide">
            <p className="surveyTitle">Basic Survey</p>
          </div>
          <div className="rightSrvSide">
            <a href="/results" className="resultsTxt">
              Results
            </a>
            <a href="/survey1">
              <button id="surveyBtn">Start</button>
            </a>
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
            <p className="surveyTitleGreen">Survey #3</p>
          </div>
          <div className="rightSrvSide">
            <p className="surveyTitleGreen"> Coming Soon</p>
          </div>
        </div>
      </div>
      {/* ) */}
    </ProtectedContent>
  );
};

export default Content;
