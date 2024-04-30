import React, { useState } from "react";
import cross from "../images/Cross.png";
import xma from "../images/X.png";
import axios from "axios";

const Create = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dateofbirth: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/users/", formData);
      if (response.status >= 200 && response.status < 300){
        console.log(response)
        window.location.href = "/signin"; }
         else {

        window.location.href = "/nopage";
      }
    } catch (error) {
      console.error("Error:", error);
      window.location.href = "/nopage";
    }
  };

  return (
    <div className="main_wrapper _back">
      <div className="main_1">
        <div className="withcross">
          <img className="cross" src={cross} alt="cross" />
          <div className="main_2">
            <img className="xm" src={xma} alt="xma" />
          </div>
        </div>
        <div className="heading"></div>
        <div className="databox secdatabox">
          <div className="flexbox all ">
            <div>
              <h1>Create Your Account</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="big"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Name"
                required
              />

              <div className="upper">
                <div>
                  <input
                    className="big"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    className="big"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <>
                <div className="dateofbirth">
                  <h3>Date of birth</h3>
                  <p>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>
                </div>
              </>
              <div className="dob">
                <input
                  className="big"
                  type="date"
                  name="dateofbirth"
                  value={formData.dateofbirth}
                  onChange={handleInputChange}
                  placeholder="Date Of Birth"
                />
              </div>
              <div className="down">
                <button className="sign_butt white" type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
