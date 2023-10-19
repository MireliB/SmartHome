import React, { useEffect, useState } from "react";
import classes from "./LampModeControl.module.css";

export default function LampModeControl(props) {
  const [lampMode, setLampMode] = useState("OFF");
  const [lampColor, setLampColor] = useState();
  const [lampFontColor, setLampFontColor] = useState("yellow");
  const [isLampOn, setIsLampOn] = useState(false);
  const lampModeHandler = (newMode) => {
    if (props.deviceName === "Lamp") {
      setLampMode(newMode);
    }

    if (newMode === "ON") {
      setLampColor("yellow");
      setLampFontColor("black");
      setIsLampOn(false);
    } else if (newMode === "OFF") {
      setLampColor("black");
      setLampFontColor("yellow");
      setIsLampOn(false);
    } else {
      setIsLampOn(true);
    }
  };

  useEffect(() => {
    setLampColor(isLampOn ? "yellow" : "black"); // Reset background color when component mounts
  }, [isLampOn]);

  if (isLampOn) {
    return null;
  }

  return (
    <div className={classes.lampModeControl}>
      <div>
        <h2>Lamp</h2>
        <p className={classes.lampStatus} style={{ backgroundColor: lampColor, color: lampFontColor }}>
          Mode: {lampMode}
        </p>
        <div></div>

        {/* When clicking the buttons the backgroundcolor is changed */}
        <button onClick={() => lampModeHandler("ON")}>Turn On</button>
        <button onClick={() => lampModeHandler("OFF")}>Turn Off</button>
        <button onClick={() => lampModeHandler("CLOSE")}>Close</button>
      </div>
    </div>
  );
}
