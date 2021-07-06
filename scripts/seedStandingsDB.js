const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ManionFarms"
);

const standingsSeed= [
    {
        Team:"Welcome!",
        Wins: 0,
        Losses: 0,
        Ties: 0,
    },
    {
        Team:"Welcome!",
        Wins: 0,
        Losses: 0,
        Ties: 0,
    },
    {
        Team:"Welcome!",
        Wins: 0,
        Losses: 0,
        Ties: 0,
    },
    {
        Team:"Welcome!",
        Wins: 0,
        Losses: 0,
        Ties: 0,
    },

]

db.Standings
    .deleteMany({})
    .then(() => db.Standings.collection.insertMany(standingsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  