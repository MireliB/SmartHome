import React, { useState } from "react";
import classes from "./SystemModeControl.module.css";

export default function SystemModeControl(props) {
  const [volume, setVolume] = useState(50);
  const [volumeMode, setVolumeMode] = useState("OFF");
  const [isVolumeOn, setIsVolumeOn] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const volumeModeHandler = (newMode) => {
    //if the stereo system has been choosen then it will get into a new mode
    if (props.deviceName === "Stereo-System") {
      setVolumeMode(newMode);
    }
    //if the new mode is on/off then it will show the mode control and will be able to ba changed,
    if (newMode === "ON" || newMode === 'OFF') {
      setIsVolumeOn(false);
    } else {
      //if the button of close has been clicked it will hide the modecontrol
      setIsVolumeOn(true);
    }
  };

  const toggleMute = ()=>{
    setIsMuted(!isMuted);
        // Adjust volume to 0 when muted or restore to previous volume when unmuted
        setVolume(isMuted ? 0 : 50);
  }

  //volume upper function
  const increaseVolume = () => {
    if (volume < 100) {
      setVolume(volume + 5);
    }
  };
  //volume lower function
  const decreaseVolume = () => {
    if (volume > 0) {
      setVolume(volume - 5);
    }
  };

  if (isVolumeOn) {
    return null;
  }
  
  return (
    <div className={classes.stereoModeControl}>
      {!isVolumeOn && (
        <div>
          <h2>Stereo System</h2>
          <p>Volume: {volume}%</p>
          <button onClick={decreaseVolume}>-</button>
          <button onClick={increaseVolume}>+</button>

          <div>{volumeMode && <p>{volumeMode}</p>}</div>
          <button onClick={() => volumeModeHandler("ON")}>Turn On</button>
          <button onClick={() => volumeModeHandler("OFF")}>Turn Off</button>
          <button onClick={() => volumeModeHandler("CLOSE")}>Close</button>
          {/* Mute and unmute button */}
          <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        </div>
      )}
    </div>
  );
}
