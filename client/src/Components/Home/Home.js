import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="container">
      <div className="form-container">
        <h1>Join</h1>
        {/* <div className='line'></div> */}
        <form className="form">
          <div>
            <input
              type="text"
              placeholder="Enter name.."
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Room name.."
              value={room}
              required
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <div>
            <Link
              className="btn"
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
