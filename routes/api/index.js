const express = require("express");
const router = express.Router();
const articleRoutes = require("./article");
// const userRoutes = require("./users");

router.use("/article", articleRoutes);
// router.use("/users", userRoutes);
router.get("/test", (req, res) => {
  res.send("Hello")
});

module.exports = router;
