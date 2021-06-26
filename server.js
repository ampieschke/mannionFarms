const express = require("express");
const routes = require("./routes");
const path = require("path");
const http = require("http").Server(app);
const io = require('socket.io')(http);

const app = express();

app.use(routes);

/////////these lines are for socket.io///////

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});


////////END SOCKET.IO/////////


// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));