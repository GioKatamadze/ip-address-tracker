import './reset.css';
import './App.css';
import background from './images/pattern-bg.png'

// https://geo.ipify.org/api/v2/country,city?apiKey=at_c0XRjdWW9XdRj5WOWrHPcbxWMm9n3&ipAddress=8.8.8.8


function App() {
  return (
    <div className="Wrapper">
      <div>
        <img className='Background' src={ background } alt=""/>
      </div>
    </div>
  );
}

export default App;
