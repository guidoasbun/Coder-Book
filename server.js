require("dotenv").config();
const express = require("express");
const { join } = require("path");
//Authentication packages
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("./models");

const app = express();

//Middleware
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.json({ extended: false }));

//Middleware for authentication

app.use(passport.initialize());
app.use(passport.session());

//Plugins for authentication
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET, //will put in .ENV before deployment
    },
    (jwtPayload, cb) =>
      User.findById(jwtPayload.id)
        .then((user) => cb(null, user))
        .catch((err) => cb(err))
  )
);

//Middleware for React, serves to build folder for deployment
app.use(express.static(join(__dirname, "client", "build")));

//Models
require("./models");

//Routes
app.use(require("./routes"));

// app.use("/*", (req,res) => {
//   res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
// })

//Router
require("./config")
  .then(() => app.listen(process.env.PORT || 3001))
  .catch((e) => console.error(e));
