import React, { useState } from "react";
import { BrowserRouter ,  Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import AddRoom from "./components/Rooms/AddRoom";
import SelectedRoom from "./components/Rooms/SelectedRoom";
import Top from "./components/Top";
import Footer from './Footer.jsx';
import Login from "./components/LoginPage/Login";
function App() {
  const [currentRoom, setCurrentRoom] = useState({});
  const [roomList, setRoomList] = useState([]);

      //room list type option.
      const roomListsTypeOpt = [
        { name: "Bedroom - 1" },
        { name: "Bedroom - 2" },
        { name: "LivingRoom" },
        { name: "Bath Room" },
        { name: "Kitchen" },
        { name: "Garage" },
      ];
  //adding a room from class.
  const addRoom = (name, color, type) => {
    const newRoom = new ChoosenRoom(name, color, type, []); // new room created.
    setRoomList([...roomList, newRoom]);
    
  };
  
  const onChangeRoom = (room) => {
    // changing the room for the first time.
    
    setCurrentRoom(room);
  };
  const toggleOffAndOn = (index) => {
    
    //copying the current rooms and the updated devices has been chosen

    if(currentRoom && currentRoom.devices){
      const updatedDevices = [...currentRoom.devices];
        if(index >=0 && index < updatedDevices.length){
          updatedDevices[index].status = !updatedDevices[index].status;

          //setting the devices in the current room
          setCurrentRoom({
            ...currentRoom,
            devices: updatedDevices,
          });
        }
    }

  };

  return (
    <div className="App">
      <Top />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage roomList={roomList} roomChange={onChangeRoom} />}
          />
          <Route
            path="/addRoom"
            element={<AddRoom add={addRoom}  roomTypes = {roomListsTypeOpt}/>}
          />
          <Route
            path="/room/:roomId"
            element={
              <SelectedRoom
                roomList={roomList}
                showOnOff={toggleOffAndOn}
                roomTypes = {roomListsTypeOpt}
              />
            }
          />  
          <Route path="/login" element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

//changing the array to class. need to push a variables from the class to routes.
class ChoosenRoom {
  constructor(name, color, type, devices) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.devices = devices;
  }
}
