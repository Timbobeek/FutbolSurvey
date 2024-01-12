import Form from "./Form";
import { FormProvider } from "../context/FormContext";
import { useAuth0 } from "@auth0/auth0-react";
import './SurveyOne.css'
//https://www.youtube.com/watch?v=QSBc8bABwE0&t=181s&ab_channel=DaveGray
//https://github.com/gitdagray/react-multi-step-form/blob/main/src/components/Form.js 


const SurveyOne = () => {
    const { isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
          <div className="surveyPage">
            <h1 className="surveyHead2">Welcome to Basic Survey!</h1>
            <a href="/" id="goBack">Go Back</a>
            <FormProvider>
              <Form className="form" />
            </FormProvider>
          </div>
        )
    )
}

  export default SurveyOne;