import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import Homepage from "../Home/Homepage";
export default function Login(props) {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    if(!email.includes('@')){
      setError('Please enter a Valid Email');
    }else if(password.length < 6 || password.length < 0){
      setError('Please enter a valid password')
    }else {
      localStorage.setItem('email', email);
       nav('/');
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className={classes.login}>Login</h2>
      <div className={classes.input}>
        <input className={classes.email}
          type="text"
          placeholder="Email"
          onClick={emailHandler}
        />
        <br />
        <input
        className={classes.password}
          type="password"        
          placeholder="Password"
          onClick={passwordHandler}
        />
        <br />
      </div>


      <button className={classes.button} type="submit">Login</button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </form>
  );
}
