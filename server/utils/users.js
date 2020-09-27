const users = [];

const formatMsg = (sender, msg) => {
  return {
    sender,
    msg,
  };
};

const addUser = ({ name, room, id }) => {
  if (!room || !name) {
    return { error: "please fill all the fields" };
  }
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const userExist = users.find(
    (user) => user.name === name && user.room === room
  );
  if (userExist) {
    return { error: "username already taken" };
  }

  const user = { name, room, id };
  users.push(user);
  return { user };
};

const roomUsers = (room) => users.filter((user) => user.room === room);

const getUser = (id) => users.find((user) => user.id === id);

const removeUser = (id) => {
  let i = users.findIndex((user) => user.id === id);
  if (i > -1) {
    return users.splice(i, 1)[0];
  }
};
module.exports = { getUser, removeUser, addUser, roomUsers, formatMsg };
