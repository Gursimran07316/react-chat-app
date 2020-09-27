const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const cors = require("cors");
const {
  addUser,
  roomUsers,
  getUser,
  removeUser,
  formatMsg,
} = require("./utils/users");
const PORT = process.env.PORT || 5000;
app.use(require("./Routes/routes"));
app.use(cors());
io.on("connection", (socket) => {
  console.log("a new connection");
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ name, room, id: socket.id });
    if (error) {
      return callback(error);
    }
    socket.join(user.room);

    // msg shown to user only
    socket.emit("message", formatMsg("Admin", `Welcome to chat ${user.name} `));

    // msg shown to all expect user
    socket
      .to(user.room)
      .broadcast.emit("message", formatMsg("Admin", `${user.name} Joined`));
    // room members
    // io.to(user.room).emit("roomMembers", roomUsers(user.room));
    io.to(user.room).emit("roomMembers", {
      users: roomUsers(user.room),
      room: user.room,
    });
  });
  // Chatmsg
  socket.on("chatMsg", (msg, callback) => {
    // console.log(msg);
    const user = getUser(socket.id);
    io.to(user.room).emit("message", formatMsg(user.name, msg));
    callback();
  });
  // When somene left
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", formatMsg("Admit", `${user.name} Left`));
      // room members
      io.to(user.room).emit("roomMembers", {
        users: roomUsers(user.room),
        room: user.room,
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
