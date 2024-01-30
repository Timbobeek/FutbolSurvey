import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Results.css";

const apiKey = process.env.REACT_APP_API_KEY;

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

function label(text, key) {
  return { text, key };
}

const orderedKeys = [
  label("name", "name"),
  label("Favorite position", "position"),
  label("Favorite player", "favplayer"),
  label("Messi or Ronaldo", "mr"),
  label("Favorite club", "favclub"),
  label("Favorite national team", "natteam"),
  label("Favorite league", "favleague"),
  label("Favorite jersey I own", "favjersey"),
  label("Favorite memory as a spectator", "favmemspec"),
  label("Worst memory as a spectator", "wrsmemspec"),
  label("Favorite memory as a player", "favmemplr"),
  label("Worst memory as a player", "wrsmemplr"),
  label("I started playing at", "age"),
  label("I started playing because", "why"),
  label("Levels I played at", "levels"), //["amateur","hs","acad", "college", "semipro",'pro'),
  label("My biggest achievement is", "achv"),
  label("My futbol-related goal is", "goals"),
  label("Best futbol advice I have received", "advc"),
  label("Favorite pair of cleats", "clt"),
  label("Favorite ball", "ball"),
  label("Jabulani is", "jabu"),
  label("Best compliment I received", "love"),
];

function getLevels(row) {
  const levelKeys = ["amateur", "hs", "acad", "college", "semipro", "pro"];
  const levelNames = {
    amateur: "Amateur",
    hs: "High School",
    acad: "Academy",
    college: "College",
    semipro: "Semi-Pro",
    pro: "Pro",
  };
  const foundLevels = levelKeys.filter((level) => row[level]);
  return foundLevels.map((level) => levelNames[level] ?? "").join(", ");
}

const Results = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: `https://ferrata-crud2.builtwithdark.com/v1/surveys/`,
      method: "get",
      headers: {
        "x-api-key": `${apiKey}`,
      },
    })
      .then((res) => {
        const list = Object.values(res.data);
        const result = list.map((row) => {
          const member = {
            name: row["name"],
            answers: [],
          };
          
          orderedKeys.forEach((label) => {
            const data =
              label.key === "levels" ? getLevels(row) : row[label.key];

            member.answers.push({ label: label.text, data });
          });

          return member;
        });

        setData(result)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  // const userData = {
  //   'obj1': {
  //     // title: "Tab 1",
  //     'name': "Jessica Knoxman",
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
  //   'obj2': {
  //     // title: "Tab 2",
  //     'name': "Abdul Salah",
  //     a1: "Goakeeper",
  //     a2: "Mo Salah",
  //     a3: "Ronaldo",
  //     a4: "Al-Nassr",
  //     a5: "Saudi Arabia",
  //     a6: "Premier League",
  //     a7: "2022 Al-Nassr Ronaldo",
  //     a8: "2022 WC Saudi Arabia - Argentina 2:1",
  //     a9: "2022 WC Saudi Arabia not making it to playoffs",
  //     a10: "Saving a penalty last Sunday",
  //     a11: "Conceding a goal from 40 yards out",
  //     a12: "18",
  //     a13: "My dad was an a pro player",
  //     a14: "HS",
  //     a15: "Winning State with HS",
  //     a16: "Want to win Kickers A league",
  //     a17: "Listen to your heart",
  //     a18: "Love it"
  //   },
  //   'obj3':{
  //     // title: "Tab 3",
  //     'name': "Ivan Popov",
  //     a1: "Forward",
  //     a2: "Dimitar Berbatov",
  //     a3: "Messi",
  //     a4: "Manchester United",
  //     a5: "Bulgaria",
  //     a6: "Serie A",
  //     a7: "2012 Fulham Home Berbatov",
  //     a8: "Euro 2004",
  //     a9: "Berbatov playing for MU",
  //     a10: "Scoring a double in the HS State final",
  //     a11: "Breaking my knee freshman year college",
  //     a12: "5",
  //     a13: "My parents signed me up for a local club",
  //     a14: "Semi-Pro",
  //     a15: "Winning State with HS",
  //     a16: "Want to win Kickers A league",
  //     a17: "Listen to your heart",
  //     a18: "No idea"
  //    },
  // };

  // const tabs = Object.values(data);
  //console.log(tabs);

  return (
    <div className="resultsPage">
      <header className="resultsHeader">Results</header>
      <a href="/" className="resultsHome">
        <button id="surveyBtn">Home</button>
      </a>

      {data.map((member, i) => (
        <div key={`member-${i}`} className="accordionItem">
          <h2
            id={`accordionTitle-${i}`}
            className="accordionTitle"
            onClick={() => {
              switchTab(`accordionTitle-${i}`);
            }}
          >
            <div>
              <i className="arrow" />
            </div>
            {/* name header is below */}
            <p>{member.name}</p>
            <div>
              <i className="arrow" />
            </div>
          </h2>

          <div className="accordionContent">
            {member.answers.map((answer, i) => (
              <div key={`answer-${i}`}
                className={answer.label !== "name" ? "answers" : "answersName"}
              >
                <p className="answersLeft">{answer.label} </p>

                <div className="spacer" />
                <p className="answersRight">{answer.data} </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
