import './reset.css';
import './App.css';
import arrow from './images/icon-arrow.svg'

// https://geo.ipify.org/api/v2/country,city?apiKey=at_c0XRjdWW9XdRj5WOWrHPcbxWMm9n3&ipAddress=8.8.8.8


function App() {
  return (
    <div className='wrapper'>
      <div className='background'>
        <h1>IP Address Tracker</h1>

        

        <form
            // onSubmit={handleSubmit}
            autoComplete='off'
          >
            <input
              className='inputBar'
              type='text'
              name='ipaddress'
              id='ipaddress'
              placeholder='Search for any IP address or domain'
              // value={ipAddress}
              // onChange={(e) => setIpAddress(e.target.value)}
            />
            <button type='submit' className='inputButton'>
              <img src={arrow} alt='' />
            </button>
          </form>




          <div className='resultsDisplay' >

            <div className='displayBox' >
              <p className='displayTitle' >IP ADDRESS</p>
              <h2 className='displayValue' >192.212.174.101</h2>
            </div>

            <div className='hr'></div>

            <div className='displayBox' >
              <p className='displayTitle' >LOCATION</p>
              <h2 className='displayValue' >Brooklyn, NY 10001</h2>
            </div>

            <div className='hr'></div>

            <div className='displayBox' >
              <p className='displayTitle' >TIMEZONE</p>
              <h2 className='displayValue' >UTC -05:00</h2>
            </div>

            <div className='hr'></div>

            <div className='displayBox' >
              <p className='displayTitle' >ISP</p>
              <h2 className='displayValue' >SpaseX Starlink</h2>
            </div>

          </div>

      </div>
    </div>
  );
}

export default App;
