const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let activeUsers = 5;

io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("activeUsers", activeUsers);

  setInterval(() => {
    activeUsers += Math.floor(Math.random() * 10) - 5;
    socket.emit("activeUsers", activeUsers);
  }, 5000);

  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", msg);
    if (msg.includes("help")) {
      io.emit("chatMessage", "Bot: How can I assist you?");
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(4000, () => console.log("Server running on port 4000"));
