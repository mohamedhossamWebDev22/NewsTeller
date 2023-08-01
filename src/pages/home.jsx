import React from "react";
import { useState } from "react";

import validator from "validator";

import img1 from "../assets/images/illustration-sign-up-desktop.svg";
import img2 from "../assets/images/illustration-sign-up-mobile.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  var email = document.getElementById("email");

  const [mailError, setmailError] = useState('');
  const [v, setV] = useState('visible');


  const changed = () => {
    if (validator.isEmail(email.value)) {
      setmailError('')
    } else {
      setmailError('Wrong Email!!')
    }
  }

  return (
    <>
      <div className="box">
        <div className="txt">
          <h1>Stay updated!</h1>
          <p>
            Join 60,000+ product managers receiveng monthly
            <br /> updates on
          </p>

          <ul>
            <li>Product discovery building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more</li>
          </ul>

          <form>
            <label>Email address</label>
            <label id="mailError">{mailError}</label>
            <br />
            <input onChange={changed} id="email" type="email" placeholder="email@company.com" />

            <br />
            <br />
            <br />

            <NavLink to="/ok" >
              <h1 className="btn" style={{visibility: {v}}}>
                Subscribe to monthly newsteller
                
              </h1>
            </NavLink>
          </form>
        </div>
        <img src={img1} className="img1" width="100%" alt="img" />
        <img src={img2} className="img2" width="100%" alt="img" />
      </div>
    </>
  );
};

export default Home;
