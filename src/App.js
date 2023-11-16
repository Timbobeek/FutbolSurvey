import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      &#9917; Futbol Survey &#9917;
        <h2>Who is your favorite player?</h2>
        <form>
          <input type="text" id="q1answer" name="fname"/><br/>
          <input type="submit" value="SUBMIT" className="submitBtn"/>
        </form> 
      </header>
    </div>
  );
}

export default App;
