import React from 'react'
import classes from './Top.module.css';
import smartHomeIcon from '../photos/LIGHT.jpg'
export default function Top() {
  return (
    <div>
    <header className= {classes.header}>
      <h1 style={{textAlign : 'center'}}>Smart Home</h1>
        <nav>
          <ul>
            <a href="/"><button>Home</button></a>
            <a href="/login"><button>Login</button></a> 
          </ul>
        </nav>
      </header>
      <div className={classes['main-image']}>
        <img src={smartHomeIcon} alt="A Smart Application for Your Home!" />
      </div>
    </div>
  )
}
