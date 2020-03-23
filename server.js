const express = require("express");

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Models
require("./models");

//Routes
app.use(require('./routes'))

//Router
require("./config")
    .then(() => app.listen(3000))
    .catch((e) => console.error(e));
