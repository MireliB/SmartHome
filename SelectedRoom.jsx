import React, { useEffect, useState } from "react";
import DeviceSelect from "../RoomDevices/DeviceSelect";
import { Link, useParams } from "react-router-dom";
import classes from"./SelectedRoom.css";
import ModeControl from "../Mode/ModeControl";
import LampModeControl from "../Mode/LampModeControl";
import WaterHeaterModeControl from "../Mode/WaterHeaterModeControl";
import SystemModeControl from "../Mode/SystemModeControl";

export default function SelectedRoom(props) {
  
  const [room, setRoom] = useState({});
  const [isDeviceSelectOpen, setIsDeviceSelectOpen] = useState(false);
  const [showModeControl, setShowModeControl] = useState(false);
  const [showLampModeControl, setShowLampModeControl] = useState(false);
  const [showWaterModeControl, setShowWaterModeControl] = useState(false);
  const [showVolumeModeControl, setShowVolumeModeControl] = useState(false);
  const [addedDevices, setAddedDevices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const roomId = useParams().roomId;

  const devicesList = [
    { name: "A/C", deviceName: "A/C" },
    { name: "Lamp", deviceName: "Lamp" },
    { name: "Stereo-System", deviceName: "Stereo-System" },
    { name: "Water-Heater", deviceName: "Water-Heater" },
  ];

  const openDeviceSelector = () => {
    setIsDeviceSelectOpen(!isDeviceSelectOpen);
  };

  const addDevice = (deviceName) => {
    if (room) {
      if (addedDevices.includes(deviceName)) {
        setErrorMessage(
          `${deviceName} is already added to this room. Please choose a different device.`
        );
      } else {
        const newDevice = new Device(deviceName, false);
        const updateDevices = [...room.devices, newDevice];
        setRoom({
          ...room,
          devices: [...updateDevices],
        });
        // Mark the device as added for this room
        setAddedDevices([...addedDevices, deviceName]);
        setErrorMessage("");
      }
      if (deviceName === "Lamp" ) {
        setShowLampModeControl(true);
      }

      if (deviceName === "A/C") {
        setShowModeControl(true);
      }

      if (deviceName === "Water-Heater") {
        setShowWaterModeControl(true);
      }
      if (deviceName === "Stereo-System") {
        setShowVolumeModeControl(true);
      }
    }
  };

  useEffect(() => {
    //if adding a room by the same name it will save the id and the room type to the new room
    const currentRoom = props.roomList.find((room) => {
      return room.name === roomId;
    });
    if (currentRoom) {
      setRoom(currentRoom);
    }
  }, [props.roomList, roomId]);

  function DeviceComponent(props) {
    return (
      <h4
        onClick={() => {
          props.showOnOff(props.index);
        }}
        className="deviceOnOff"
      >
        {props.deviceName}
      </h4>
    );
  }


  return (
    <div>
      <Link to="/">
        <button>Back to Menu</button>
      </Link>

      <div className="roomContainer">
        <h3 className= {classes.roomName}>Room Name : {room.name}</h3>
        <h3 className={classes.roomType}>Room Type : {room.type}</h3>
        {/* theres a bug in the room type. it doesnt change after 1 time.  */}

        {room.devices?.map((device, ind) => {
          return (
            <DeviceComponent
              onClick={() => {
                props.showOnOff(ind);
              }}
              key={device.deviceName}
              flag={true}
              className="deviceOnOff"
              value={device.name}
              devicesList={devicesList}
            />
          );
        })}

        <div>
          {showLampModeControl && <LampModeControl deviceName="Lamp" />}
        </div>
        <div>
          {showVolumeModeControl && (
            <SystemModeControl deviceName="Stereo-System" />
          )}
        </div>
        <div>
          {showWaterModeControl && (
            <WaterHeaterModeControl deviceName="Water-Heater" />
          )}
        </div>
        <div>
          <div>{showModeControl && <ModeControl deviceName="A/C" />}</div>
        </div>
      </div>
      <button onClick={openDeviceSelector}>Add Device</button>
      {/* an error message if the device added more then one time */}
      {errorMessage && (
        <p style={{ color: "red", border: "1px solid red" }}>{errorMessage}</p>
      )}
      {isDeviceSelectOpen ? (
        <DeviceSelect
          addDeviceToRoom={addDevice}
          onOff={props.showOnOff}
          changeFlag={setIsDeviceSelectOpen}
          flagChange={isDeviceSelectOpen}
          devicesList={devicesList}
        />
      ) : (
        ""
      )}
    </div>
  );
}

class Device {
  constructor(deviceName, status) {
    this.name = deviceName;
    this.status = status;
  }
}
