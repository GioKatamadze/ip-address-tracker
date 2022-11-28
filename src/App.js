import './reset.css';
import './App.css';
import arrow from './images/icon-arrow.svg';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from './icon';

// https://geo.ipify.org/api/v2/country,city?apiKey=at_c0XRjdWW9XdRj5WOWrHPcbxWMm9n3&ipAddress=8.8.8.8

const position = [51.505, -0.09];

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

          
          <div className='map' style={{width: '100vw' }}>
          <MapContainer style={{ height: '500px' }} center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={icon} position={position}>
              <Popup>
                Location
              </Popup>
            </Marker>
          </MapContainer>
          </div>

      </div>
    </div>
  );
}

export default App;
