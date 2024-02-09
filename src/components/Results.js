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


  return (
    <>
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
    </>
  );
};

export default Results;
