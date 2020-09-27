import React from "react";
import { Link } from "react-router-dom";
import "./error.css";
const Error = ({ error }) => {
  return (
    <div className="error-container">
      <div className="error-box">
        <h2>{error}</h2>
        <Link to="/" className="btn">
          Back to join
        </Link>
      </div>
    </div>
  );
};

export default Error;
