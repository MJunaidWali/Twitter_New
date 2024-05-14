import React from "react";
import X_logo from "../images/X.png";
import Google from "../images/Google.png";
import Apple from "../images/Apple.ico";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  
  return (
    <div className="all_Wraper">
      <div className="box_wrapper">
        <div className="left_parent">
          <img className="logox" src={X_logo} alt="logo" />
        </div>
        <div className="Right_parent">
          <p className="happ">Happening now</p>
          <div className="except heading">
            <h1 className="heading_2">Join today.</h1>
            <div className="inputboxes">
              <div className="input_fields">
                <button className="for_google">
                  <img className="google" src={Google} alt="google" />
                    Sign Up With Google
                </button>
                <button className="for_google">
                  <img className="google" src={Apple} alt="Apple" />
                  Sign Up With Apple
                </button>
              </div>
              <div className="line_or">
                <div className="lineing"></div>
                <span>or</span> <div className="lineing"></div>
              </div>
              <button className="create"><Link to="/create"> Create Account</Link></button>
              <span className="terms">
                By <a href="/">signing up</a>, you are agreeing to the{" "}
                <a href="/">Terms of Service</a> and{" "}
                <a href="/">Privacy Policy</a>, including Cookie use.
              </span>
              <div className="sign_but">
                <h3>Already have an account?</h3>
                <button className="sign_butt">
                  <NavLink to="/signin" className="active">
                    Signin
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="fooots">
          <span className="foot">About</span>
          <span className="foot">Download the X app</span>
          <span className="foot">Help Center</span>
          <span className="foot">Terms of Service</span>
          <span className="foot">Privacy Policy</span>
          <span className="foot">Cookie Policy</span>
          <span className="foot">MStV Transparenzangaben</span>
          <span className="foot">Imprint</span>
          <span className="foot">Accessibility</span>
          <span className="foot">Ads info</span>
          <span className="foot">Blog</span>
          <span className="foot">Careers</span>
          <span className="foot">Brand Resources</span>
          <span className="foot">Advertising</span>
          <span className="foot">Marketing</span>
          <span className="foot">X for Business</span>
          <span className="foot">Developers</span>
          <span className="foot">Directory</span>
          <span className="foot">Settings</span>
          <span className="foot">© 2024 X Corp.</span>
        </div>
      </footer>
    </div>
  );
};

export default Login;
