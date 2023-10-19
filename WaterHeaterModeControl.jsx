import React, { useState } from "react";
import classes from "./WaterHeaterModeControl.module.css";

export default function WaterHeaterModeControl(props) {
  const [waterMode, setWaterMode] = useState("OFF");
  const [isWaterOn, setIsWaterOn] = useState(false);
  const [temp, setTemp] = useState(25);
  const waterModeHandler = (newMode) => {
    
    if (props.deviceName === "Water-Heater") {
      setWaterMode(newMode);
    }

    if (newMode === "ON" || newMode === "OFF") {
      setIsWaterOn(false);
    } else {
      setIsWaterOn(true);
    }
  };

  const increaseTemp = () => {
    if (temp < 50) {
      setTemp(temp + 1);
    }
  };

  const decreaseTemp = () => {
    if (temp > 0) {
      setTemp(temp - 1);
    }
  };
  if (isWaterOn) {
    return null;
  }

  return (
    <div className={classes.waterModeControl}>
      {!isWaterOn && (
        <div>
          <h2>Water Heater</h2>
          <p>Current Degree: {temp} °C</p>
          <button onClick={decreaseTemp}>-</button>
          <button onClick={increaseTemp}>+</button> <br />
          <div>
            <div>{waterMode && <p>{waterMode}</p>}</div>
            <button onClick={() => waterModeHandler("ON")}>Turn On</button>
            <button onClick={() => waterModeHandler("OFF")}>Turn Off</button>
            <br />
          </div>
          <button onClick={() => waterModeHandler("CLOSE")}> Close</button>
        </div>
      )}
    </div>
  );
}
