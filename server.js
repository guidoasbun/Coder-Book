require("dotenv").config();
const express = require("express");
const { join } = require("path");

const app = express();

//Middleware
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Middleware for React, serves to build folder for deployment
app.use(express.static(join(__dirname, "client", "build")));

//Models
require("./models");

//Routes
app.use(require("./routes"));

//Router
require("./config")
  .then(() => app.listen(3001))
  .catch((e) => console.error(e));


