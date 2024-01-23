import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
const [led1Status, setLed1Status] = useState(false) 
const [led2Status, setLed2Status] = useState(false)
useEffect (()=> { 
  // Fetch initial LED status from Arduino
  axios.get("http://192.168.1.7")
    .then((response) => {
      console.log("Connected to Arduino");
    })
    .catch((error) => {
      console.error("Error connecting to Arduino:", error);
    });
}, []);

const toggleLed = async (ledNumber) => {
  try {
    // Send toggle request to Arduino
    const response = await axios.get(`http://192.168.1.7/toggle?led=${ledNumber}`);
    const newStatus = response.data.status;

    if (ledNumber === 1) {
      setLed1Status(newStatus);
    } else if (ledNumber === 2) {
      setLed2Status(newStatus);
    }
  } catch (error) {
    console.error('Error sending request to Arduino:', error);
  }
};
const TurnOnOffLed01 = () => {
  axios.get("http://192.168.1.7/turnOnOffLed1").then((response)=> { console.log("done")
  })
}
const TurnOnOffLed02 = () => {
  axios.get("http://192.168.1.7/turnOnOffLed2").then((response)=> { console.log("done")
  })
}
const batled1 = () => {
  toggleLed(1);
  //TurnOnOffLed01();
};
const batled2 = () => {
  toggleLed(2);
  //TurnOnOffLed01();
};

return (
  <div className='App'>
<div className='container' >
<div className='row col-md-12 text-center'> <h2><FontAwesomeIcon icon={faLightbulb} />Turn on/off led </h2>
<p>Living Room</p>

{
led1Status ?
<button type="button" className="btn btn-danger mb-2"
onClick={() => batled1()} >TURN OFF LED 01 </button> :
<button type="button" className="btn btn-success mb-2" onClick={() => batled1()} >TURN ON LED 01</button>
}
{
led2Status ?
<button type="button" className="btn btn-danger mb-2" onClick={() => batled2()} >TURN OFF LED 02 </button>
:
<button type="button" className="btn btn-success mb-2" onClick={() => batled2()} >TURN ON LED 02</button>
}
</div>
</div>
</div>
);
}export default App;