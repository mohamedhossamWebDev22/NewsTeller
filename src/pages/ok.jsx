import React from "react";

import img1 from "../assets/images/icon-success.svg";
import { NavLink } from "react-router-dom";

const Ok = () => {
  return (
    <>
      <div className="box">
        <div className="msg">
          <img src={img1} alt="" />
          <h1>Thanks For Subscribing!</h1>
          <p>
            A conformation email has been sent to <b>ash@loremcompany.com</b>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>

          <NavLink to = "/">
            <h1 className="btn">
              ok
            </h1>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Ok;
