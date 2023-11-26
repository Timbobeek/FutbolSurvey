import React, { useState, useEffect } from "react";
import { API_KEY } from "../nasastuff";
import axios from "axios";
import './Results.css';

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

const Results = () => {



    // const [data, setData] = useState({})

    // useEffect(()=>{
    //     axios.get(`https://restcountries.com/v3.1/name/eesti`)
    //       .then(res=>{
    //         setData(res.data[0])
    //         //console.log(res.data)
    //       })
    //       .catch(err =>{
    //         console.log(err)
    //       })
    //   },[]);

    //   const {capital, cca2} = data;

                {/* The poll results will be posted here!<br></br>
            {capital}<br></br>
            {cca2}
            <a href="/">Home</a> */}

            const accordionTitles = document.querySelectorAll(".accordionTitle");

            accordionTitles.forEach((accordionTitle) => {
              accordionTitle.addEventListener("click", () => {
                if (accordionTitle.classList.contains("is-open")) {
                  accordionTitle.classList.remove("is-open");
                } else {
                  const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
                  accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
                    accordionTitleWithIsOpen.classList.remove("is-open");
                  });
                  accordionTitle.classList.add("is-open");
                }
              });
            });
            

    return (
      
        <div>
          <div className="accordionItem">
            <h2 className="accordionTitle">Tab 1</h2>
            <div className="accordionContent">
              <p>Information here</p>
            </div>
          </div>
      
          <div className="accordionItem">
            <h2 className="accordionTitle">Tab 2</h2>
            <div className="accordionContent">
              <p>Information here</p>
            </div>
          </div>
      
          <div className="accordionItem">
            <h2 className="accordionTitle">Tab 3</h2>
            <div className="accordionContent">
              <p>Information here</p>
            </div>
          </div>
        </div>

    )
}

export default Results;