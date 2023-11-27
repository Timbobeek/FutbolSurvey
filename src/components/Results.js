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
  // const accordionTitles = document.querySelectorAll(".accordionTitle");

  // accordionTitles.forEach((accordionTitle) => {
  //   accordionTitle.addEventListener("click", () => {
  //     if (accordionTitle.classList.contains("is-open")) {
  //       accordionTitle.classList.remove("is-open");
  //     } else {
  //       const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
  //       accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
  //         accordionTitleWithIsOpen.classList.remove("is-open");
  //       });
  //       accordionTitle.classList.add("is-open");
  //     }
  //   });
  // });

  const tabs = [
    { title: "Tab 1", text: "Information 1 here" },
    { title: "Tab 2", text: "Information 2 here" },
    { title: "Tab 3", text: "Information 3 here" },
  ];

  return (
    <div>
      {tabs.map((tab, i) => (
        <div className="accordionItem">
          <h2
            id={`accordionTitle-${i}`}
            className="accordionTitle"
            onClick={() => switchTab(`accordionTitle-${i}`)}
          >
            {tab.title}
          </h2>
          <div className="accordionContent">
            <p>{tab.text}</p>
          </div>
        </div>
      ))}

      {/* <div className="accordionItem">
        <h2
          id="accordionTitle-1"
          className="accordionTitle"
          onClick={() => switchTab("accordionTitle-1")}
        >
          Tab 1
        </h2>
        <div className="accordionContent">
          <p>Information here</p>
        </div>
      </div>

      <div className="accordionItem">
        <h2
          id="accordionTitle-2"
          className="accordionTitle"
          onClick={() => switchTab("accordionTitle-2")}
        >
          Tab 2
        </h2>
        <div className="accordionContent">
          <p>Information here</p>
        </div>
      </div>

      <div className="accordionItem">
        <h2
          id="accordionTitle-3"
          className="accordionTitle"
          onClick={() => switchTab("accordionTitle-3")}
        >
          Tab 3
        </h2>
        <div className="accordionContent">
          <p>Information here</p>
        </div>
      </div> */}
    </div>
  );
};

export default Results;
