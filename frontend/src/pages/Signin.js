import React, { useState } from "react";
import cross from "../images/Cross.png";
import xma from "../images/X.png";
import { Link } from "react-router-dom";
import Google from "../images/Google.png";
import Apple from "../images/Apple.ico";
import axios from "axios";

const Signin = () => {
  const [username, setUsername] = useState({
    username :""
  });

  const handlechange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const getResponse = await axios.get("http://127.0.0.1:8000/users/");
      console.log("All Users");
      console.log("User data:", getResponse.data);
      
      const users = getResponse.data;
      const userExists = users.some(user => user.username === username.username);
  
      if (userExists) {
        console.log("User exists");
      } else {
        console.log("User does not exist");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
    return (
    <div className="main_wrapper">
      <div className="main_1">
        <div className="withcross">
          <img className="cross" src={cross} alt="cross" />
          <div className="main_2">
            <img className="xm" src={xma} alt="xma" />
          </div>
        </div>
        <div className="heading"></div>
        <div className="databox">
          <h1>Sign in to X</h1>
          <div className="inputs">
            <div className="bothlinks">
              <button className="for_google">
                <img className="google" src={Google} alt="google" />
                Sign Up With Google
              </button>
              <button className="for_google">
                <img className="google" src={Apple} alt="Apple" />
                Sign Up With Apple
              </button>
              <div className="line_or">
                <div className="lineing"></div>
                <span className="h1">or</span>
                <div className="lineing"></div>
                </div>
                  <div className="inp">
                    <input
                      type="text"
                      className="input"
                      placeholder="Username,Email or Phone"
                      value={username}
                      onChange={handlechange}
                    />
                  </div>
                <button className="sign_butt" onClick={handleSubmit}>
                  Next
                </button>
              
              <button className="sign_butt">Forgot Password</button>
            </div>
          </div>
          <div className="h1">
            <p>
              Don't have an account?
              <Link className="sig" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
