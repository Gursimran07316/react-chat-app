import React from "react";
import reactEmoji from "react-emoji";
import "./message.css";
const Message = ({ sender, msg, name }) => {
  let sentByUser = false;
  let trimmedName = name.trim().toLowerCase();
  if (trimmedName === sender) {
    sentByUser = true;
  }
  return sentByUser ? (
    <div className="chat-msg right">
      <span className="sender">{sender}</span>
      <p className="blue">{reactEmoji.emojify(msg)}</p>
    </div>
  ) : (
    <div className="chat-msg left">
      <p className="grey">{reactEmoji.emojify(msg)}</p>
      <span className="sender">{sender}</span>
    </div>
  );
};

export default Message;
