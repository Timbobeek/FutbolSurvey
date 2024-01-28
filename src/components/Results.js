import React, { useState, useEffect } from "react";
import { API_KEY } from "../nasastuff";
import axios from "axios";
import "./Results.css";

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

  const [data, setData] = useState({})

  useEffect(()=>{
        axios({
          url: `https://ferrata-crud2.builtwithdark.com/v1/surveys/`,
          method: 'get',
          headers: {
            'x-api-key': `${API_KEY}`
          }
        })
          .then(res=>{
            setData(res.data)
            console.log(res.data);
            console.log(Object.entries(res.data)[0][1].name)
          })
          .catch(err =>{
            console.log(err)
          })
      },[]);


  //replace const below with the actual data coming from an api
  // const tabs = [
  //   { 
  //     // title: "Tab 1",
  //     "name" : "Jessica Knoxman",
  //     "Favorite position": "Midfield",
  //     "Favorite player": "Cristiano Ronaldo",
  //     "Messi or Ronaldo": "Messi",
  //     "Favorite club": "Bayern Munchen",
  //     "Favorite national team": "Australia",
  //     "Favorite league": "Bundesliga",
  //     "Favorite jersey I own": "2007 Barcelona Away Puyol ",
  //     "Favorite memory as a specator": "The Invincibles Arsenal Season jsdhfjdshj djshfjkdshf sdhnfjksdhkfjh sdfjhsdjfhjks sdhjfhdsjfhs",
  //     "Worst memory as a spectator": "Arsen Wenger leaving Arsenal",
  //     "Favorite memory as a player": "Scoring a double in the HS State final",
  //     "Worst memory as a player": "Breaking my knee freshman year college",
  //     "I started playing at": "7",
  //     "I started playing because": "My parents signed me up for a local club",
  //     "Levels I played at": "Semi-Pro",
  //     "My biggest achievement is": "Winning State with HS",
  //     "My futbol-related goal is": "Want to win Kickers A league",
  //     "Best futbol advice I have received": "Listen to your heart",
  //     "Favorite pair of cleats": "Nike Total 90",
  //     "Favorite ball": "Brazuca",
  //     "Jabulani is": "Trash",
  //     "Best compliment I received": "Your touch is magical"
  //   },
  //   { 
  //     // title: "Tab 2",
  //    'name': "Abdul Salah",
  //    a1: "Goakeeper",
  //    a2: "Mo Salah",
  //    a3: "Ronaldo",
  //    a4: "Al-Nassr",
  //    a5: "Saudi Arabia",
  //    a6: "Premier League",
  //    a7: "2022 Al-Nassr Ronaldo",
  //    a8: "2022 WC Saudi Arabia - Argentina 2:1",
  //    a9: "2022 WC Saudi Arabia not making it to playoffs",
  //    a10: "Saving a penalty last Sunday",
  //    a11: "Conceding a goal from 40 yards out",
  //    a12: "18",
  //    a13: "My dad was an a pro player",
  //    a14: "HS",
  //    a15: "Winning State with HS",
  //    a16: "Want to win Kickers A league",
  //    a17: "Listen to your heart",
  //    a18: "Love it"
  //   },
  //   { 
  //     // title: "Tab 3",
  //    "name": "Ivan Popov",
  //    a1: "Forward",
  //    a2: "Dimitar Berbatov",
  //    a3: "Messi",
  //    a4: "Manchester United",
  //    a5: "Bulgaria",
  //    a6: "Serie A",
  //    a7: "2012 Fulham Home Berbatov",
  //    a8: "Euro 2004",
  //    a9: "Berbatov playing for MU",
  //    a10: "Scoring a double in the HS State final",
  //    a11: "Breaking my knee freshman year college",
  //    a12: "5",
  //    a13: "My parents signed me up for a local club",
  //    a14: "Semi-Pro",
  //    a15: "Winning State with HS",
  //    a16: "Want to win Kickers A league",
  //    a17: "Listen to your heart",
  //    a18: "No idea"
  //    },
  // ];

  const userData = {
    'obj1': { 
      // title: "Tab 1",
      'name': "Jessica Knoxman",
      "Favorite position": "Midfield",
      "Favorite player": "Cristiano Ronaldo",
      "Messi or Ronaldo": "Messi",
      "Favorite club": "Bayern Munchen",
      "Favorite national team": "Australia",
      "Favorite league": "Bundesliga",
      "Favorite jersey I own": "2007 Barcelona Away Puyol ",
      "Favorite memory as a specator": "The Invincibles Arsenal Season jsdhfjdshj djshfjkdshf sdhnfjksdhkfjh sdfjhsdjfhjks sdhjfhdsjfhs",
      "Worst memory as a spectator": "Arsen Wenger leaving Arsenal",
      "Favorite memory as a player": "Scoring a double in the HS State final",
      "Worst memory as a player": "Breaking my knee freshman year college",
      "I started playing at": "7",
      "I started playing because": "My parents signed me up for a local club",
      "Levels I played at": "Semi-Pro",
      "My biggest achievement is": "Winning State with HS",
      "My futbol-related goal is": "Want to win Kickers A league",
      "Best futbol advice I have received": "Listen to your heart",
      "Favorite pair of cleats": "Nike Total 90",
      "Favorite ball": "Brazuca",
      "Jabulani is": "Trash",
      "Best compliment I received": "Your touch is magical"
    },
    'obj2': { 
      // title: "Tab 2",
      'name': "Abdul Salah",
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
    'obj3':{ 
      // title: "Tab 3",
      'name': "Ivan Popov",
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
  };

  const tabs = Object.values(userData);


  return (
    <div className="resultsPage">
      <header className="resultsHeader">Results</header>
      <a href="/" className="resultsHome"><button id="surveyBtn">Home</button></a>


      {tabs.map((tab, i) => (
        <div className="accordionItem">
         
          <h2
            id={`accordionTitle-${i}`}
            className="accordionTitle"
            onClick={() => {
              switchTab(`accordionTitle-${i}`);
            }}
          >
            <div><i className="arrow"/></div>
            {/* name header is below */}
            <p>{tab.name}</p> 
            <div><i className="arrow"/></div>
          </h2>


          <div className="accordionContent">

            {Object.entries(tab).map((arr) => (
                <div className={ arr[0] !== 'name' ? "answers" : "answersName"}> 
                  <p className="answersLeft">{arr[0]} </p>
                  <div className="spacer"/>
                  <p className="answersRight">{arr[1]} </p> 
                </div>
            ))}

          </div>

        </div>
      ))}


    </div>
  );
};

export default Results;
