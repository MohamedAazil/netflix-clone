import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import "./Login.css";
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {

  const [signState, setSignState] = useState("Sign in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState.toLowerCase() === "sign in") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };
  function singup() {
    setSignState("Sign Up");
  }
  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState.toLowerCase() === "sign up" ? (
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState.toLowerCase() === "sign in" ? (
            <p>
              New to Netflix? <span onClick={singup}>Sign Up</span>
            </p>
          ) : (
            <p>
              Existing User?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In</span>
            </p>
          )}
          {/* both arrow and normal function used to show difference */}
        </div>
      </div>
    </div>
  );
};

export default Login;
