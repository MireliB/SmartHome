import React from 'react'
import { Link } from 'react-router-dom'
import './Rooms.css';
import Card from '../UI/Card';
export default function Rooms(props) {
    return (
    
        <div>
            {props.list.map((val, ind)=>{
                return<Link to = {`/room/${val.name}`} key = {ind} className='room-card' >
                    {/* when Im typing the color, the room get the color and the name */}
                    <section key = {ind} style = {{backgroundColor: val.color}}className='room'>                                     
                        <Card>
                            <ul className= 'ul'> {val.name} </ul>
                        </Card>
                    </section>
                    <br />
                </Link>
            })}
        </div>

  )
}
