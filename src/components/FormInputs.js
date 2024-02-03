import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"
import Question6 from "./Question6"
import Question7 from "./Question7"
import Question8 from "./Question8"
import Question9 from "./Question9"
import Question10 from "./Question10"
import Question11 from "./Question11"
import Question12 from "./Question12"
import Question13 from "./Question13"
import Question14 from "./Question14"
import Question15 from "./Question15"
import Question16 from "./Question16"
import Question17 from "./Question17"
import Question18 from "./Question18"
import Question19 from "./Question19"
import Question20 from "./Question20"
import Question21 from "./Question21"
import Question22 from "./Question22"
import SubmissionMsg from "./SubmissionMessage"
import useFormContext from "../hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Question1 />,
        1: <Question2 />,
        2: <Question3 />,
        3: <Question4 />,
        4: <Question5 />,
        5: <Question6 />,
        6: <Question7 />,
        7: <Question8 />,
        8: <Question9 />,
        9: <Question10 />,
        10: <Question11 />,
        11: <Question12 />,
        12: <Question13 />,
        13: <Question14 />,
        14: <Question15 />,
        15: <Question16 />,
        16: <Question17 />,
        17: <Question18 />,
        18: <Question19 />,
        19: <Question20 />,
        20: <Question21 />,
        21: <Question22 />,
        22: <SubmissionMsg />
    }

    const content = (
        <div className="form-inputs">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs