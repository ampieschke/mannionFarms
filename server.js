const express = require("express");
const routes = require("./routes");
const path = require("path");
// const http = require("http").Server(app);
// const io = require('socket.io')(http);
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/////////these lines are for socket.io///////

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
// });

////////END SOCKET.IO/////////

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/MannionFarms", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
mongoose.Promise = global.Promise;
app.use(routes);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
