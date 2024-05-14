import React, { useState } from "react";
import cross from "../images/Cross.png";
import xma from "../images/X.png";
import { Link } from "react-router-dom";
import Google from "../images/Google.png";
import Apple from "../images/Apple.ico";
import axios from "axios";
// import { URL } from "./url"

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/token/`,
        {
          username,
          password
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token); 
      console.log("Logged in successfully!")
      window.location.href='/home';
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };
  axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
  return (
    <div className="main_wrapper">
      <div className="main_1">
        <div className="withcross">
          <img className="cross" src={cross} alt="cross" />
          <div className="main_2">
            <img className="xm" src={xma} alt="xma" />
          </div>
        </div>
        <div className="heading">
        </div>
          <div className="databox">
            <h1>Sign in to X</h1>
            <div className="inputs">
              <form type='submit'  onSubmit={handleSubmit} className="bothlinks">
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
                
                <div className="inp _tops">
                  <input
                    type="text"
                    name="username"
                    className="input"
                    placeholder="Enter Username"
                    value={username}
                    onChange={handleChange}
                  />
                  <div className="inp">
                    <input
                      type="text"
                      className="input"
                      name="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  <div />
                </div>
                <button className="sign_butt" onClick={handleSubmit}>
                  Next
                </button>
                <button className="sign_butt">Forgot Password</button>
              </form>
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
