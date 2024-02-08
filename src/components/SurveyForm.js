import { useNavigate } from "react-router-dom"
import './Form.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


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
import { InputTypes, SurveyQuestion, checkBoxesControl, numericTextControl, radioButtonsControl, textControl } from "./SurveyQuestion";

import { useContext } from "react"
import SurveyContext from "./SurveyContext";

const useFormContext = () => {
    return useContext(SurveyContext)
}

const apiKey = process.env.REACT_APP_API_KEY;

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
    [22, `url(${loadingImg})`]
])

const pages = [
    <SurveyQuestion title={"What's your name?"} control={textControl("name", "name", "Timmy")} />,
    <SurveyQuestion title={"Favorite position?"} control={radioButtonsControl('position', [
        { id: 'gk', value: 'Goalkeeping', label: 'GK' },
        { id: 'def', value: 'Defense', label: 'DEF' },
        { id: 'mid', value: 'Midfield', label: 'MID' },
        { id: 'fwd', value: 'Forward', label: 'FWD' },
    ])} />,
    <SurveyQuestion title={"Who's your favorite player?"} control={textControl("favplayer", "favplayer", "Ronaldo")} />,
    <SurveyQuestion title={"Messi or Ronaldo?"} control={radioButtonsControl('mr', [
        { id: 'messi', value: 'Messi', label: 'Messi' },
        { id: 'ronaldo', value: 'Ronaldo', label: 'Ronaldo' },
        { id: 'both', value: 'Both', label: 'Like and respect both' },
        { id: 'neither', value: 'Neither', label: 'Dislike both' },
        { id: 'idc', value: 'IDC', label: `Don't care` },
    ])} />,
    <SurveyQuestion title={"What's your favorite club?"} control={textControl("favclub", "favclub", "Barcelona")} />,
    <SurveyQuestion title={"What's your favorite national team?"} control={textControl("natteam", "natteam", "USA")} />,
    <SurveyQuestion title={"What's your favorite league?"} control={textControl("favleague", "favleague", "MLS")} />,
    <SurveyQuestion title={"What's the favorite jersey you own?"} control={textControl("favjersey", "favjersey", "2004 Barcelona Puyol Away")} />,
    <SurveyQuestion title={"What's your favorite futbol memory as a spectator?"} control={textControl("favmemspec", "favmemspec", "Greece winning EURO2004")} />,
    <SurveyQuestion title={"What's your worst futbol memory as a spectator?"} control={textControl("wrsmemspec", "wrsmemspec", "Ronaldo not winning WC2022")} />,
    <SurveyQuestion title={"What's your favorite futbol memory as a player?"} control={textControl("favmemplr", "favmemplr", "Winning Kickers in 2016")} />,
    <SurveyQuestion title={"What's your worst futbol memory as a player?"} control={textControl("wrsmemplr", "wrsmemplr", "Breaking my leg in 2003")} />,
    <SurveyQuestion title={"At what age did you start playing?"} control={numericTextControl("age", "age", "4")} />,
    <SurveyQuestion title={"Why did you start playing?"} control={textControl("why", "why", "My dad was a pro player")} />,
    <SurveyQuestion title={"What level did you play at?"} control={checkBoxesControl([
        { id: 'amateur', name: 'amateur', value: 'amateur', label: 'Amateur' },
        { id: 'hs', name: 'hs', value: 'high school', label: 'High School' },
        { id: 'acad', name: 'acad', value: 'pro academy', label: 'Pro Academy' },
        { id: 'college', name: 'college', value: 'college', label: 'College' },
        { id: 'semipro', name: 'semipro', value: 'semi-pro', label: 'Semi-Pro' },
        { id: 'pro', name: 'pro', value: 'pro', label: 'Pro' },
    ])} />,
    <SurveyQuestion title={"What's your biggest achievement in futbol so far?"} control={textControl("achv", "achv", "Winning State with Tate High")} />,
    <SurveyQuestion title={"Any futbol-related goals/dreams?"} control={textControl("goals", "goals", "Coaching my local HS by 2030")} />,
    <SurveyQuestion title={"Best futbol advice you've received?"} control={textControl("advc", "advc", "Listen to your heart")} />,
    <SurveyQuestion title={"Favorite pair of cleats?"} control={textControl("clt", "clt", "Nike Total 90")} />,
    <SurveyQuestion title={"Favorite ball?"} control={textControl("ball", "ball", "Brazuca")} />,
    <SurveyQuestion title={"Jabulani ball is ..."} control={radioButtonsControl('jabu', [
        { id: 'trash', value: 'trash', label: 'Trash' },
        { id: 'enjoyable', value: 'enjoyable', label: 'Enjoyable' },
        { id: 'noidea', value: 'noidea', label: 'No idea' },
    ])} />,
    <SurveyQuestion title={"Best futbol compliment ever received?"} control={textControl("love", "love", "Your touch is magical")} />,
    <div className="submissionTxt">
            All done, look at you!
            Thank you for taking the time, means a lot &#x1F49A;
    </div>
]

const pageToButtonPosition = new Map([
    [0, "flex-end"]
])

const defaultImage =  "none";

const defaultButtonPosition = "space-between";

const SurveyForm = () => {

    const { user } = useAuth0();
    const navigate = useNavigate();
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

        // const postData = { ...data, userId: user.sub };

        axios.post('https://ferrata-crud2.builtwithdark.com/v1/surveys/', data, {headers: {'x-api-key': apiKey}})
        .then((res) => {
            console.log('dsadsad', res.status, res.data)
            handleNext();
            // navigate('/')
        })
    }

    useEffect(() => {
        const image = pageToImage.get(page) ?? defaultImage
        setImage(image)
        const position = pageToButtonPosition.get(page) ?? defaultButtonPosition
        setPosition(position)
    }, [page])

    const content = (
        <form id="formCont" className="formContainer" >
            
            <div className="questionTitle">{title[page]}</div>

            <div className="bannerImg" style={{backgroundImage: image, 
                // backgroundPosition: "top",
                 backgroundSize: "cover"
                 }}/>
          
            <div className="formBottom">
                <div className="button-container" style={{display: "flex", justifyContent: position }}>
                    <button type="button" id="surveyBtnBig" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev} >Prev</button>
                    <button type="button" id="surveyBtnBig" className={`button ${nextHide}`} onClick={handleNext} disabled={!enableNext} >Next</button>
                    {/* redirect on submission pf the form written below */}
                    <button type="button" id="surveyBtnBig" className={`button ${submitHide}`} disabled={!canSubmit} onClick={handleSubmit} >Submit</button>
                </div>
                <div className="form-inputs">
                    {/* {display[page]} */}
                    {pages[page]}

                </div>

            </div>

        </form>
)

    return content
}
export default SurveyForm