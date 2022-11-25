import './reset.css';
import './App.css';
import arrow from './images/icon-arrow.svg'

// https://geo.ipify.org/api/v2/country,city?apiKey=at_c0XRjdWW9XdRj5WOWrHPcbxWMm9n3&ipAddress=8.8.8.8


function App() {
  return (
    <div className="wrapper">
      <div className='background'>
        <h1>IP Address Tracker</h1>

        <form
            // onSubmit={handleSubmit}
            autoComplete="off"
            className="w-full flex"
          >
            <input
              className="inputBar"
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any IP address or domain"
              // value={ipAddress}
              // onChange={(e) => setIpAddress(e.target.value)}
            />
            <button type="submit" className="inputButton">
              <img src={arrow} alt="" />
            </button>
          </form>

      </div>
    </div>
  );
}

export default App;
