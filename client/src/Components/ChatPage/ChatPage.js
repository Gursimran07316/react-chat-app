import React, { useEffect, useState } from "react";
import query from "query-string";
import io from "socket.io-client";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import "./chatpage.css";
import Input from "../Input/Input";
import RoomMembers from "../RoomMembers/RoomMembers";
import Error from "../Errors/Error";
const ENDpoint = "https://react-chat-application-0.herokuapp.com/";
let socket;
const ChatPage = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    const { name, room } = query.parse(location.search);

    socket = io(ENDpoint);
    setRoom(room);
    setName(name);
    socket.emit("join", { name, room }, (err) => {
      if (err) {
        seterror(err);
      }
    });
  }, [location.search]);
  useEffect(() => {
    socket.on("message", (msg) => {
      // console.log(msg);
      setMessages((prev) => [...prev, msg]);
    });
    socket.on("roomMembers", ({ users }) => {
      // console.log(users);
      setMembers(users);
    });
  }, []);
  const sendMesssage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("chatMsg", message, () => setMessage(""));
    }
  };
  return !error ? (
    <div className="msg-container">
      <div className="main">
        <div className="msg-box">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            sendMesssage={sendMesssage}
            setMessage={setMessage}
          />
        </div>
        <RoomMembers members={members} />
      </div>
    </div>
  ) : (
    <Error error={error} />
  );
};

export default ChatPage;
