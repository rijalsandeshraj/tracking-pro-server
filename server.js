const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);
const PORT = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("addUser", (username) => {
    io.emit("addUser", username);
    console.log(username);
  });

  socket.on("removeUser", (username) => {
    io.emit("removeUser", username);
    console.log(username);
  });

  socket.on("tracer", (username) => {
    io.emit("tracer", username);
    console.log(username);
  });

  socket.on("tracerOff", (username) => {
    io.emit("tracerOff", username);
    console.log(username);
  });

  socket.on("location", (location) => {
    io.emit("location", location);
    console.log(location);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening at the port: ${PORT}`);
});
