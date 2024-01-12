import { useNavigate } from "react-router-dom"
import useFormContext from "../hooks/useFormContext"
import FormInputs from './FormInputs'
import './Form.css';

const Form = () => {

    const navigate = useNavigate();

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        enableNext,
        prevHide,
        nextHide,
        submitHide
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    const content = (
        <form className="formContainer" onSubmit={handleSubmit}>

            <header>
                <h2 className="questionTitle">{title[page]}</h2>
                <div className="button-container">
                    <button type="button" id="surveyBtnBig" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>
                    <button type="button" id="surveyBtnBig" className={`button ${nextHide}`} onClick={handleNext} disabled={!enableNext}>Next</button>
                    {/* redirect on submission pf the form written below */}
                    <button type="submit" id="surveyBtnBig" className={`button ${submitHide}`} disabled={!canSubmit} onClick={()=> navigate('/')}>Submit</button>
                </div>
            </header>

            <FormInputs/>

        </form>
    )

    return content
}
export default Form