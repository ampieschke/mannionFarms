const express = require("express");
const routes = require("./routes");
const path = require("path");

const app = express();

app.use(routes);

// serve static assets if we are in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
