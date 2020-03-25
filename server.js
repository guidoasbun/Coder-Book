require("dotenv").config();
const express = require("express");
const { join } = require("path");

const app = express();

//Middleware
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Models
require("./models");

//Routes
app.use(require("./routes"));

//Router
require("./config")
  .then(() => app.listen(3000))
  .catch((e) => console.error(e));
