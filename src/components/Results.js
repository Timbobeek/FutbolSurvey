import React, { useState, useEffect } from "react";
import { API_KEY } from "../nasastuff";
import axios from "axios";

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

    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/eesti`)
          .then(res=>{
            setData(res.data)
            console.log(res.data)
          })
          .catch(err =>{
            console.log(err)
          })
      },[]);

      const {cca2} = data;
      // i wonna have different types of data in data state

    return (
        <div className="welcomeText">
            The poll results will be posted here!<br></br>
            {cca2}
        </div>
    )
}

export default Results;