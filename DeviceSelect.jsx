import React, { useState } from "react";
import classes from './DeviceSelect.module.css';
export default function DeviceSelect(props) {
  const [deviceChosen, setDeviceChosen] = useState("A/C");

  //adding devices by function.
  const addDevices = () => {
    props.addDeviceToRoom(deviceChosen);
    props.changeFlag(false);

  };

  return (
    <div>
      <select className= {classes.select}
        onChange={(e) => {
          setDeviceChosen(e.target.value);
        }}
        value={deviceChosen}
      >

      {props.devicesList.map((val)=>{
        return  <option key={val.deviceName} className= {classes.option}>{val.deviceName}</option>
      })}

      </select> <br />
      <button className= {classes.deviceBtn}
        onClick={() => {
          addDevices();
        }}
      > 
        Add Product
      </button>

    </div>
  );
}
