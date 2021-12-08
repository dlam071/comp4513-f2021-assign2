require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

//get our data model
const User = require("./models/User.js");
const Play = require("./models/List.js");

//to tell node to use json and http header features
app.use(express.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, "../Development/build");
app.use(express.static(publicPath));

//use route handlers
const userRouter = require("./handlers/userRouter.js");
const listRouter = require("./handlers/listRouter.js");
userRouter.handleUserByID(app, User);
listRouter.handleAllPlays(app, Play);
listRouter.handlePlayByID(app, Play);

//create connection to database
require("./handlers/dataConnector.js").connect();

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});
