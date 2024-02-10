import { SurveyProvider } from "./SurveyContext";
import SurveyForm from "./SurveyForm";
import "./SurveyOne.css";

const Survey = () => {
  return (
    <SurveyProvider>
      <SurveyForm/>
    </SurveyProvider>
  );
};

export default Survey;
