import './reset.css';
import './App.css';
import arrow from './images/icon-arrow.svg';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Markerposition from './MarkerPosition';



function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState('');
  const checkIpAddress =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
const checkDomain =
  /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  useEffect (() => {
    try {
      const getInitialData = async () => {
        const res = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_c0XRjdWW9XdRj5WOWrHPcbxWMm9n3&ipAddress=192.212.174.101');
        const data = await res.json();
        setAddress(data);
        console.log(data)

      }
    

      getInitialData()
    } catch(error) {
      console.log(error)
    }
  }, [])

  const getEnteredData = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&${
        checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      }`
    )
    const data = await res.json()
    setAddress(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getEnteredData()
    setIpAddress("")
  }


  return (
    <div className='wrapper'>
      <div className='background'>
        <h1>IP Address Tracker</h1>

        

        <form
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <input
              className='inputBar'
              type='text'
              name='ipaddress'
              id='ipaddress'
              placeholder='Search for any IP address or domain'
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button type='submit' className='inputButton'>
              <img src={arrow} alt='' />
            </button>
          </form>




          {address && (
            <br></br>
          ) && (
            <>
            <div className='resultsDisplay' >

            <div className='displayBox' >
              <p className='displayTitle' >IP ADDRESS</p>
              <h2 className='displayValue' >{address.ip}</h2>
            </div>

            <div className='hr'></div>

            <div className='displayBox' >
              <p className='displayTitle' >LOCATION</p>
              <h2 className='displayValue' >{address.location.city}, {address.location.region}</h2>
            </div>

            <div className='hr'></div>

            <div className='displayBox' >
              <p className='displayTitle' >TIMEZONE</p>
              <h2 className='displayValue' >UTC {address.location.timezone}</h2>
            </div>

            <div className='hr'></div>

            <div className='displayBox' >
              <p className='displayTitle' >ISP</p>
              <h2 className='displayValue' >{address.isp}</h2>
            </div>

          </div>


            <div className='map' style={{width: '100vw' }}>
            <MapContainer style={{ height: '600px' }} center={[address.location.lat, address.location.lng]} zoom={5} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Markerposition address={address} />
            </MapContainer>
            </div>

            </>
          )}
          

          

          
          

      </div>
    </div>
  );
}

export default App;
