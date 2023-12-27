import Billing from "./Billing"
import OptIn from "./OptIn"
import Shipping from "./Shipping"
import QuestionOne from "./QuestionOne"
import QuestionTwo from "./QuestionTwo"
import QuestionThree from "./QuestionThree"
import QuestionFour from "./QuestionFour"
import useFormContext from "../hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <QuestionOne />,
        1: <QuestionTwo />,
        2: <QuestionThree />,
        3: <QuestionFour />,
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs