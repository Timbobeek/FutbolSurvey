import React, { useState, useEffect } from "react";
import { API_KEY } from "../nasastuff";
import axios from "axios";
import "./Results.css";
import jersey from "../jersey.jpg";

// const Results = () => {

//     const [data, setData] = useState({})

//     useEffect(()=>{
//         axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
//           .then(res=>{
//             setData(res.data)
//           })
//           .catch(err =>{
//             console.log(err)
//           })
//       },[]);

//       const {title} = data;

//     return (
//         <div className="welcomeText">
//             The poll results will be posted here!<br></br>
//             {title}
//         </div>
//     )
// }

function switchTab(tabId) {
  const accordionTitle = document.getElementById(tabId);
  if (!accordionTitle) {
    return;
  }

  if (accordionTitle.classList.contains("is-open")) {
    accordionTitle.classList.remove("is-open");
  } else {
    const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
    accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
      accordionTitleWithIsOpen.classList.remove("is-open");
    });
    accordionTitle.classList.add("is-open");
  }
}

const Results = () => {

  //replace const below with the actual data coming from an api
  const tabs = [
    { 
      // title: "Tab 1",
      a0: "Jessica Knoxman",
      a1: "Midfield",
      a2: "Cristiano Ronaldo",
      a3: "Messi",
      a4: "Bayern Munchen",
      a5: "Australia",
      a6: "Bundesliga",
      a7: "2007 Barcelona Away Puyol ",
      a8: "The Invincibles Arsenal Season",
      a9: "Arsen Wenger leaving Arsenal",
      a10: "Scoring a double in the HS State final",
      a11: "Breaking my knee freshman year college",
      a12: "7",
      a13: "My parents signed me up for a local club",
      a14: "Semi-Pro",
      a15: "Winning State with HS",
      a16: "Want to win Kickers A league",
      a17: "Listen to your heart",
      a18: "Trash",
    },
    { 
      // title: "Tab 2",
     a0: "Abdul Salah",
     a1: "Goakeeper",
     a2: "Mo Salah",
     a3: "Ronaldo",
     a4: "Al-Nassr",
     a5: "Saudi Arabia",
     a6: "Premier League",
     a7: "2022 Al-Nassr Ronaldo",
     a8: "2022 WC Saudi Arabia - Argentina 2:1",
     a9: "2022 WC Saudi Arabia not making it to playoffs",
     a10: "Saving a penalty last Sunday",
     a11: "Conceding a goal from 40 yards out",
     a12: "18",
     a13: "My dad was an a pro player",
     a14: "HS",
     a15: "Winning State with HS",
     a16: "Want to win Kickers A league",
     a17: "Listen to your heart",
     a18: "Love it"
    },
    { 
      // title: "Tab 3",
     a0: "Ivan Popov",
     a1: "Forward",
     a2: "Dimitar Berbatov",
     a3: "Messi",
     a4: "Manchester United",
     a5: "Bulgaria",
     a6: "Serie A",
     a7: "2012 Fulham Home Berbatov",
     a8: "Euro 2004",
     a9: "Berbatov playing for MU",
     a10: "Scoring a double in the HS State final",
     a11: "Breaking my knee freshman year college",
     a12: "5",
     a13: "My parents signed me up for a local club",
     a14: "Semi-Pro",
     a15: "Winning State with HS",
     a16: "Want to win Kickers A league",
     a17: "Listen to your heart",
     a18: "No idea"
     },
  ];

  return (
    <div>
      <header className="resultsHeader">&#9917;Results&#9917;</header>
      {tabs.map((tab, i) => (
        <div className="accordionItem">
          <h2
            id={`accordionTitle-${i}`}
            className="accordionTitle"
            onClick={() => switchTab(`accordionTitle-${i}`)}
          >
            <p>{tab.a0}</p>
          </h2>
          <div className="accordionContent">
            {console.log(Object.entries(tab)[0])}
            {Object.entries(tab).map((arr) => (
                <p className={ arr[0] !== 'a0' ? "answers" : "answersName"}> {arr[0]} : {arr[1]} </p>
            ))}
            {/* either show the jersey on the right side or
            have a button on which if you click the image pops up */}
            <img src={jersey} alt="jersey" width={400} height={600}/>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
