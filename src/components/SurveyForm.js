import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import './SurveyPage.css';
import loadingImg from "../surveyImages/danburn.jpg"
import img1 from "../surveyImages/vennegor.jpg"
import img2 from "../surveyImages/Soccer-Formation~.png"
import img3 from "../surveyImages/ronaldogaucho.jpg"
import img4 from "../surveyImages/Messi-&-Ronaldo.png"
import img5 from "../surveyImages/morecambe.jpg"
import img6 from "../surveyImages/usmnt~.jpg"
import img7 from "../surveyImages/premCrop2.jpg"
import img8 from "../surveyImages/collection.webp"
import img9 from "../surveyImages/liverpool.avif"
import img10 from "../surveyImages/brazilgermany.jpg"
import img11 from "../surveyImages/hawklooongCrop.jpg"
import img12 from "../surveyImages/urnpublinjury.webp"
import img13 from "../surveyImages/kids~.jpg"
import img14 from "../surveyImages/son.jpg"
import img15 from "../surveyImages/pyramid2.png"
import img16 from "../surveyImages/worldcup.webp"
import img17 from "../surveyImages/conference.jpg"
import img18 from "../surveyImages/advice.webp"
import img19 from "../surveyImages/nike-total-90-laser-i-remake-boots-9.jpg"
import img20 from "../surveyImages/brazuca.jpg"
import img21 from "../surveyImages/jabulani.avif"
import img22 from "../surveyImages/klopp.jpg"
import { SurveyQuestion, checkBoxesControl, numericTextControl, radioButtonsControl, textControl, titleControl } from "./SurveyQuestion";
import { useContext } from "react"
import SurveyContext from "./SurveyContext";

const useFormContext = () => {
    return useContext(SurveyContext)
}

const apiKey = process.env.REACT_APP_API_KEY;

function page(image, question) {
    return {
        image,
        question
    }
}

const pages = [
    page(img1, { title: "What's your name?", control: textControl("name", "name", "Danny Drinkwater")} ),
    page(img2, { title: "Favorite position?", control: radioButtonsControl('position', 'radioButtons', 'bigRadioText', [
        { id: 'gk', value: 'Goalkeeping', label: 'GK' },
        { id: 'def', value: 'Defense', label: 'DEF' },
        { id: 'mid', value: 'Midfield', label: 'MID' },
        { id: 'fwd', value: 'Forward', label: 'FWD' },
    ])} ),
    page(img3, { title: "Who's your favorite player?", control: textControl("favplayer", "favplayer", "Ronaldo")} ),
    page(img4, { title: "Messi or Ronaldo?", control: radioButtonsControl('mr', 'smallRadioButtons', 'smallRadioText', [
        { id: 'messi', value: 'Messi', label: 'Messi' },
        { id: 'ronaldo', value: 'Ronaldo', label: 'Ronaldo' },
        { id: 'both', value: 'Both', label: 'Like and respect both' },
        { id: 'neither', value: 'Neither', label: 'Dislike both' },
        { id: 'idc', value: 'IDC', label: `Don't care` },
    ])} ),
    page(img5, { title: "What's your favorite club?", control: textControl("favclub", "favclub", "Barcelona")} ),
    page(img6, { title: "What's your favorite national team?", control: textControl("natteam", "natteam", "USA")} ),
    page(img7, { title: "What's your favorite league?", control: textControl("favleague", "favleague", "MLS")} ),
    page(img8, { title: "What's the favorite jersey you own?", control: textControl("favjersey", "favjersey", "2004 Barcelona Puyol Away")} ),
    page(img9, { title: "What's your favorite futbol memory as a spectator?", control: textControl("favmemspec", "favmemspec", "Greece winning EURO2004"), options: {titleStyle: "questionTextLong"}} ),
    page(img10, { title: "What's your worst futbol memory as a spectator?", control: textControl("wrsmemspec", "wrsmemspec", "Ronaldo not winning WC2022"), options: {titleStyle: "questionTextLong"}} ),
    page(img11, { title: "What's your favorite futbol memory as a player?", control: textControl("favmemplr", "favmemplr", "Winning Kickers in 2016"), options: {titleStyle: "questionTextLong"}} ),
    page(img12, { title: "What's your worst futbol memory as a player?", control: textControl("wrsmemplr", "wrsmemplr", "Breaking my leg in 2003"), options: {titleStyle: "questionTextLong"}} ),
    page(img13, { title: "At what age did you start playing?", control: numericTextControl("age", "age", "4")} ),
    page(img14, { title: "Why did you start playing?", control: textControl("why", "why", "My dad was a pro player")} ),
    page(img15, { title: "What level did you play at?", control: checkBoxesControl([
        { id: 'amateur', name: 'amateur', value: 'amateur', label: 'Amateur' },
        { id: 'hs', name: 'hs', value: 'high school', label: 'High School' },
        { id: 'acad', name: 'acad', value: 'pro academy', label: 'Pro Academy' },
        { id: 'college', name: 'college', value: 'college', label: 'College' },
        { id: 'semipro', name: 'semipro', value: 'semi-pro', label: 'Semi-Pro' },
        { id: 'pro', name: 'pro', value: 'pro', label: 'Pro' },
    ])} ),
    page(img16, { title: "What's your biggest achievement in futbol so far?", control: textControl("achv", "achv", "Winning State with Tate High"), options: {titleStyle: "questionTextLong"}} ),
    page(img17, { title: "Any futbol-related goals/dreams?", control: textControl("goals", "goals", "Coaching my local HS by 2030")} ),
    page(img18, { title: "Best futbol advice you've received?", control: textControl("advc", "advc", "Listen to your heart")} ),
    page(img19, { title: "Favorite pair of cleats?", control: textControl("clt", "clt", "Nike Total 90")} ),
    page(img20, { title: "Favorite ball?", control: textControl("ball", "ball", "Brazuca")} ),
    page(img21, { title: "Jabulani ball is ...", control: radioButtonsControl('jabu', 'radioButtons', 'bigRadioText', [
        { id: 'trash', value: 'trash', label: 'Trash' },
        { id: 'enjoyable', value: 'enjoyable', label: 'Enjoyable' },
        { id: 'noidea', value: 'noidea', label: 'No idea' },
    ])} ),
    page(img22, { title: "Best futbol compliment ever received?", control: textControl("love", "love", "Your backheels are magical")} ),
    page(loadingImg, { title: "", control: titleControl() } )
]

const pageToButtonPosition = new Map([
    [0, "flex-end"]
])

const defaultImage =  "none";

const defaultButtonPosition = "space-between";

const SurveyForm = () => {

    const { user } = useAuth0();
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

        const postData = { ...data, userId: user.sub };

        axios.post('https://ferrata-crud2.builtwithdark.com/v1/surveys/', postData, {headers: {'x-api-key': apiKey}})
        .then((res) => {
            handleNext();
        })
    }

    useEffect(() => {
        const image = pages[page].image ?? defaultImage
        setImage(image)
        const position = pageToButtonPosition.get(page) ?? defaultButtonPosition
        setPosition(position)
    }, [page])

    const content = (
        <form id="formCont" className="formContainer" >
            
            <div className="questionTitle">{title[page]}</div>

            <div className="bannerImg" style={{backgroundImage: `url(${pages[page].image})`, 
                // backgroundPosition: "top",
                 backgroundSize: "cover"
                 }}/>
          
            <div className="formBottom">
                <div className="button-container" style={{display: "flex", justifyContent: position }}>
                    <button type="button" id="surveyBtnBig" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev} >Prev</button>
                    <button type="button" id="surveyBtnBig" className={`button ${nextHide}`} onClick={handleNext} disabled={!enableNext} >Next</button>
                    <button type="button" id="surveyBtnBig" className={`button ${submitHide}`} disabled={!canSubmit} onClick={handleSubmit} >Submit</button>
                </div>
                { pages[page].question && (
                    <div className="form-inputs">
                        <SurveyQuestion key={`question-${page}`} 
                            title={pages[page].question.title} 
                            control={pages[page].question.control}
                            options={pages[page].question.options} />
                    </div>
                )}

            </div>

        </form>
)

    return content
}
export default SurveyForm