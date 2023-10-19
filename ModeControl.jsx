import React, { useState } from "react";

import classes from "./ModeControl.module.css";

export default function ModeControl(props) {
  const [currentMode, setCurrentMode] = useState("OFF");
  const [temperature, setTemperature] = useState(20);
  const [isVisible, setIsVisible] = useState(false);
  const [fanModes, setFanModes] = useState(["LOW", "MEDIUM", "HIGH", "AUTO"]);
  const [selectedFanModeIndex, setSelectedFanModeIndex] = useState(0);

  const modeHandler = (newMode) => {
    if (props.deviceName === "A/C") {
      setCurrentMode(newMode);
    }

    if (newMode === "ON" || newMode === "OFF") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const toggleFanMode = () => {
    const nextIndex = (selectedFanModeIndex + 1) % fanModes.length;
    setSelectedFanModeIndex(nextIndex);
  };
  const increaseTemp = () => {
    if (temperature < 30) {
      setTemperature(temperature + 1);
    }
  };
  const decreaseTemp = () => {
    if (temperature > 16) {
      setTemperature(temperature - 1);
    }
  };

  const temperatureHandler = (e) => {
    const newTemperature = parseInt(e.target.value, 10);
    // Ensure the temperature is within a valid range (e.g., 16°C to 30°C)
    if (
      !isNaN(newTemperature) &&
      newTemperature >= 16 &&
      newTemperature <= 30
    ) {
      setTemperature(newTemperature);
    }
  };

  if (isVisible) {
    return null;
  }

  return (
    <div className={classes.modeControl}>
      {!isVisible && (
        <div>
          <h2>AC</h2>
          <p>Mode: {currentMode}</p>
          <p>Fan: {fanModes[selectedFanModeIndex]}</p>
          <input
            className={classes.input}
            type="number"
            id="temperature"
            name="temperature"
            value={temperature}
            onChange={temperatureHandler}
            key={temperature}
          />
          <label htmlFor="temperature">°C</label> <br />
          <button onClick={decreaseTemp}>-</button>
          <button onClick={increaseTemp}>+</button> <br />
          <button
            onClick={() => {
              modeHandler("ON");
            }}
          >
            Power On
          </button>
          <button
            onClick={() => {
              modeHandler("OFF");
            }}
          >
            Turn Off
          </button>
          <button onClick={toggleFanMode}>
            {fanModes[selectedFanModeIndex]}
          </button>
          <button
            onClick={() => {
              modeHandler("CLOSE");
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
