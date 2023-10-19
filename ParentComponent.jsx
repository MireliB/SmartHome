import React from 'react'
import { useState } from 'react';
import LampModeControl from './LampModeControl';

export default function ParentComponent(props) {
    const [roomColor, setRoomColor] = useState('#FFFFFF');

  const updateRoomColor = (newColor)=>{
    setRoomColor(newColor)
  }
    return (

    <div>
        <LampModeControl deviceName = "Lamp" updateRoomColor = {updateRoomColor}/>
    </div>
  )
}
