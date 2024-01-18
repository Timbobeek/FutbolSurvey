import { useNavigate } from "react-router-dom"
import useFormContext from "../hooks/useFormContext"
import FormInputs from './FormInputs'
import './Form.css';
import { useEffect, useState } from "react";

import loadingImg from "../surveyImages/danburn.jpg"
import img1 from "../surveyImages/vennegor.jpg"
import img2 from "../surveyImages/Soccer-Formation.png"
import img3 from "../surveyImages/ronaldogaucho.jpg"
import img4 from "../surveyImages/Messi-&-Ronaldo.webp"
import img5 from "../surveyImages/morecambe.jpg"
import img6 from "../surveyImages/usmnt.jpg"
import img7 from "../surveyImages/prem.jpg"
import img8 from "../surveyImages/collection.webp"
import img9 from "../surveyImages/liverpool.avif"
import img10 from "../surveyImages/brazilgermany.jpg"
import img11 from "../surveyImages/hawklooong.jpg"
import img12 from "../surveyImages/urnpublinjury.webp"
import img13 from "../surveyImages/kids.jpg"
import img14 from "../surveyImages/son.jpg"
import img15 from "../surveyImages/level.webp"
import img16 from "../surveyImages/worldcup.webp"
import img17 from "../surveyImages/uefa.jpg"
import img18 from "../surveyImages/advice.webp"
import img19 from "../surveyImages/total.webp"
import img20 from "../surveyImages/brazuca.jpg"
import img21 from "../surveyImages/jabulani.avif"
import img22 from "../surveyImages/klopp.jpg"

// const pageToColor = new Map([
//     [0, "green"],
//     [1, "yellow"],
//     [2, "red"],
//     [3, "blue"]
// ])

const pageToImage = new Map([
    [0, `url(${img1})`],
    [1, `url(${img2})`],
    [2, `url(${img3})`],
    [3, `url(${img4})`],
    [4, `url(${img5})`],
    [5, `url(${img6})`],
    [6, `url(${img7})`],
    [7, `url(${img8})`],
    [8, `url(${img9})`],
    [9, `url(${img10})`],
    [10, `url(${img11})`],
    [11, `url(${img12})`],
    [12, `url(${img13})`],
    [13, `url(${img14})`],
    [14, `url(${img15})`],
    [15, `url(${img16})`],
    [16, `url(${img17})`],
    [17, `url(${img18})`],
    [18, `url(${img19})`],
    [19, `url(${img20})`],
    [20, `url(${img21})`],
    [21, `url(${img22})`],
])

const pageToButtonPosition = new Map([
    [0, "flex-end"]
])

// const defaultColor = "yellow"

const defaultImage =  "none";

const defaultButtonPosition = "space-between";

const Form = () => {

    const navigate = useNavigate();
    // const [color, setColor] = useState(defaultColor)
    const [image, setImage] = useState(defaultImage)
    const [position, setPosition] = useState(defaultButtonPosition)

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
        // const color = pageToColor.get(page) ?? defaultColor
        // setColor(color)
        const image = pageToImage.get(page) ?? defaultImage
        setImage(image)
        const position = pageToButtonPosition.get(page) ?? defaultButtonPosition
        setPosition(position)
    }, [page])

    // const content = (
    //     <form id="formCont" className="formContainer" onSubmit={handleSubmit} 
    //         style={{backgroundImage: image, backgroundPosition: "center", backgroundSize: "cover"}}
    //     >
    //         <header>
    //             <h2 className="questionTitle">{title[page]}</h2>
    //             <div className="button-container">
    //                 <button type="button" id="surveyBtnBig" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev} style={{marginRight: "5px"}}>Prev</button>
    //                 <button type="button" id="surveyBtnBig" className={`button ${nextHide}`} onClick={handleNext} disabled={!enableNext} style={{marginRight: "5px"}}>Next</button>
    //                 {/* redirect on submission pf the form written below */}
    //                 <button type="submit" id="surveyBtnBig" className={`button ${submitHide}`} disabled={!canSubmit} onClick={()=> navigate('/')}>Submit</button>
    //             </div>
    //         </header>

    //         <FormInputs/>

    //     </form>
    //)

    const content = (
            <form id="formCont" className="formContainer" onSubmit={handleSubmit} style={{backgroundImage: image, backgroundPosition: "center", backgroundSize: "cover"}}>
                
                <div className="questionTitle">{title[page]}</div>

                <div className="formBottom">
                    <div className="button-container" style={{display: "flex", justifyContent: position }}>
                        <button type="button" id="surveyBtnBig" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev} >Prev</button>
                        <button type="button" id="surveyBtnBig" className={`button ${nextHide}`} onClick={handleNext} disabled={!enableNext} >Next</button>
                        {/* redirect on submission pf the form written below */}
                        <button type="submit" id="surveyBtnBig" className={`button ${submitHide}`} disabled={!canSubmit} onClick={()=> navigate('/')}>Submit</button>
                    </div>
                    <FormInputs/>
                </div>

            </form>

    )

    return content
}
export default Form