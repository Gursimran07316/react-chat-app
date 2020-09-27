import React from "react";
import "./input.css";
const Input = ({ message, setMessage, sendMesssage }) => {
  return (
    <form className="send-form" onSubmit={sendMesssage}>
      <input
        type="text"
        placeholder="Send msg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn-send" onClick={sendMesssage}>
        Send
      </button>
    </form>
  );
};

export default Input;
