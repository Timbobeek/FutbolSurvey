import Billing from "./Billing"
import OptIn from "./OptIn"
import Shipping from "./Shipping"
import QuestionOne from "./QuestionOne"
import QuestionTwo from "./QuestionTwo"
import QuestionThree from "./QuestionThree"
import useFormContext from "../hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Billing />,
        1: <Shipping />,
        2: <QuestionOne />,
        3: <OptIn />,
        4: <QuestionTwo />,
        5: <QuestionThree />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs