import React from "react";
import classes from './Devices.module.css'
export default function Devices(props) {
  return (
    <div className= {classes.devicesContainer}>

      {props.listsOfDevice.map((val, ind) => {

        return (

          <div className= {classes.device} key={ind} onClick={props.addDevice(val.deviceName)}>
            
            {val.deviceName}
          </div>
        );
      })}
    </div>
  );
}
