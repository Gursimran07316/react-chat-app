import React from "react";
import close from "..//../icons/closeIcon.png";
import online from "..//../icons/onlineIcon.png";

import "./infobar.css";
const InfoBar = ({ room }) => (
  <div className="infobar">
    <div className="div-1">
      <img src={online} alt={room} />
      <h3> {room} </h3>
    </div>
    <div className="div-2">
      <a href="/">
        <img src={close} alt="close" />
      </a>
    </div>
  </div>
);

export default InfoBar;
