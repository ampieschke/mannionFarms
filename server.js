const express = require("express");
const routes = require("./routes");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

app.use(routes);

/////////these lines are for socket.io///////
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 4001;
const index = require("./routes/index");

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

////////END SOCKET.IO/////////

// serve static assets if we are in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
server.listen(port, () =>
  console.log(`Server up and running on port ${port} !`)
);
