import React, { useState } from "react";
import cross from "../images/Cross.png";
import xma from "../images/X.png";
import { NavLink, redirect } from "react-router-dom";
import axios from "axios";
import { URL } from "./url";

const Flow = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${URL}, {
        usernameOrEmail: "usernameOrEmailValue", 
        password: password
      }`);

      if (response.status === 200 && response.data.passwordMatch) {
        Window.location.href="/home";

      } else {console.log("Error 404")
      redirect("/nopage");

      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
          <div>
            <h1>Enter Your Password</h1>
          </div>

          <div className="flexbox pass">
            <div className="upper">
              <input
                className="big"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <NavLink to="/">Forgot Password?</NavLink>
            </div>
            <div className="down">
              <button className="sign_butt white " onClick={handleSubmit}>
                Log In
              </button>
              <div className="h1">
                Don't have an account?<NavLink to="/signup">Sign up</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Flow;
