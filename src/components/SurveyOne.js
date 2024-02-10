import './SurveyOne.css'
import { SurveyProvider } from "./SurveyContext";
import SurveyForm from "./SurveyForm";


// const SurveyOne = () => {
//     return(
//       <FormProvider>
//         <Form className="form" />
//       </FormProvider>
//     )
// }

const SurveyOne = () => {
  return(
    <SurveyProvider>
      <SurveyForm/>
    </SurveyProvider>
  )
}

export default SurveyOne;