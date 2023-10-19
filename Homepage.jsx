import React from "react";
import { Link } from "react-router-dom";
import Rooms from "../Rooms/Rooms";
import classes from './Homepage.module.css';
export default function Homepage(props) {
  return (
    <div>
      <h2 className="homepage-header">Smart Home</h2>
      <Rooms list={props.roomList} roomChange={props.roomChange} className = {classes.rooms} />
      <Link to="/addRoom">
        <button className={classes.button}>Add New Room</button>
      </Link>
    </div>
  );
}
