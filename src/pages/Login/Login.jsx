import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import "./Login.css";
const Login = () => {
  const [signState, setSignState] = useState("Sign Up"); 
  function singup(){
    setSignState("Sign Up");
  }
  return (
    <div className="login">
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {(signState.toLowerCase() === "sign up")?<input type="text" placeholder='Your Name' required/>: <></>}
          <input type="email" name="" id="" placeholder='Your Email' required/>
          <input type="password" name="" id="" placeholder='Password' required/>
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {(signState.toLowerCase() === "sign in")?<p>New to Netflix? <span onClick={singup}>Sign Up</span></p>:
          <p>Existing User? <span onClick={() => (setSignState("Sign In"))}>Sign In</span></p>} 
          {/* both arrow and normal function used to show difference */}
        </div>
      </div>
    </div>
  )
}

export default Login