import Form from "./Form";
import { FormProvider } from "../context/FormContext";
import { useAuth0 } from "@auth0/auth0-react";
import './SurveyOne.css'


const SurveyOne = () => {
    const { isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
          <div className="surveyPage">
            <h1 className="surveyHead2">Welcome to Basic Survey!</h1>
            {/* <a href="/" id="goBack">HOME</a> */}
            <a href="/" className="resultsHome">
             <button className="genericBtn">Home</button>
            </a>

            <FormProvider>
              <Form className="form" />
            </FormProvider>


          </div>
        )
    )
}

  export default SurveyOne;