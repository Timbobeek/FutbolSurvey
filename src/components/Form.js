import ronaldo from "../jersey.jpg"
import img1 from "../surveyImages/vennegor.jpg"
import { useNavigate } from "react-router-dom"
import useFormContext from "../hooks/useFormContext"
import FormInputs from './FormInputs'
import './Form.css';
import { useEffect, useState } from "react";

const pageToColor = new Map([
    [0, "green"],
    [1, "yellow"],
    [2, "red"],
    [3, "blue"]
])

const pageToImage = new Map([
    [0, `url(${img1})`],
    [1, `url(${ronaldo})`],
])

const defaultColor = "yellow"

const defaultImage = "none";

const Form = () => {

    const navigate = useNavigate();
    const [color, setColor] = useState("yellow")
    const [image, setImage] = useState("none")

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

    useEffect(() => {
        const color = pageToColor.get(page) ?? defaultColor
        setColor(color)
        const image = pageToImage.get(page) ?? defaultImage
        console.log(image);
        setImage(image)
    }, [page])

    const content = (
        <form id="formCont" className="formContainer" onSubmit={handleSubmit} style={{backgroundImage: image}}>
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