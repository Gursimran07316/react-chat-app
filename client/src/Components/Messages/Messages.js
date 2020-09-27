import React from "react";
import "./messages.css";
import Scrolltobottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

const Messages = ({ messages, name }) => {
  return (
    <Scrolltobottom className="message-container">
      {messages.map((message, i) => (
        <Message
          key={i}
          sender={message.sender}
          msg={message.msg}
          name={name}
        />
      ))}
    </Scrolltobottom>
  );
};

export default Messages;
