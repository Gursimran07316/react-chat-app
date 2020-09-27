import React from "react";
import onlineIcon from "..//../icons/onlineIcon.png";

import "./roommembers.css";
const RoomMembers = ({ members }) => {
  return members ? (
    <div className="textContainer">
      <h1>People currently chatting:</h1>
      <div className="activeContainer">
        <h2>
          {members.map(({ name }) => (
            <div key={name} className="activeItem">
              {name}
              <img alt="Online Icon" src={onlineIcon} />
            </div>
          ))}
        </h2>
      </div>
    </div>
  ) : null;
};
export default RoomMembers;
