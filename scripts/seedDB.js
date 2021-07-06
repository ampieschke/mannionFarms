const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ManionFarms"
);

const contentSeed= [
    {
        title:"Welcome!",
        content:"Hello and welcome to the new Mannion Farms Fantasy Football League site. It's still more or less in production, but have a look around! Have an idea for improvement? Let me know! This is sort of a proffesional development project, but also should be pretty decent spot to store our content, and history.",
        date: new Date(Date.now())
    }
]

db.Article
    .deleteMany({})
    .then(() => db.Article.collection.insertMany(contentSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  
    