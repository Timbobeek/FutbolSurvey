import { useAuth0 } from "@auth0/auth0-react";
import './Home.css';

const Home = () => {
    const { isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
          <div className="Home">
            <header className="Home-header">
            &#9917; Futbol Survey &#9917;
              <h2>Who is your favorite player?</h2>
              <form>
                <input type="text" id="q1answer" name="fname"/><br/>
                <input type="submit" value="SUBMIT" className="submitBtn"/>
              </form> 
            </header>
            <a href="/results">Results</a>
          </div>
        )
    )
}

// function Home() {

//     //change css names!!!!!!!!!!!!
//     return (
//       <div className="Home">
//         <header className="Home-header">
//         &#9917; Futbol Survey &#9917;
//           <h2>Who is your favorite player?</h2>
//           <form>
//             <input type="text" id="q1answer" name="fname"/><br/>
//             <input type="submit" value="SUBMIT" className="submitBtn"/>
//           </form> 
//         </header>
//       </div>
//     );
//   }

  export default Home;