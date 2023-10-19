import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './AddRoom.module.css'
export default function AddRoom(props) {
  const nav = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); 
  const [roomType, setRoomType] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomColor, setRoomColor] = useState("");
  
  const isValidRoomName = () => {

    //if you didnt chose a room name or color it will drop an error message
    //and wont continue to the room 
    if (roomName.trim() === '' || roomColor.trim() === '' || roomType.trim()=== '') {
      setErrorMessage('Please select a room Name and color');
    } else {
      //else it will add the name the color and the type of room
      props.add(roomName, roomColor, roomType);
      nav("/");
    }
  };

  //targeting the values function
  const roomTypeHandler = (e)=>{
    setRoomType(e.target.value);
  }

  const roomNameHandler = (e)=>{
    setRoomName(e.target.value);
  }

  const roomColorHandler = (e)=>{
    setRoomColor(e.target.value);
  }
  return (

    <div className= {classes.container}>
      <select className= {classes.select} onChange={roomTypeHandler}>    
        {props.roomTypes.map((type, index) => {
          return <option key={index}>{type.name}</option>;
        })}

      </select>
      <br />

      <input className={classes.input} type="text" placeholder="Enter a Room Name" onChange={roomNameHandler} /><br />
      <input className={classes.input} type="text" placeholder="Enter a Room Color" onChange={roomColorHandler}/>
      {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
      <br />

      <button className={classes.button} onClick={isValidRoomName}>Create</button>
    </div>
  );
}
