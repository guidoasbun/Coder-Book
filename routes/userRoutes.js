const router = require("express").Router();
const { User } = require("../models");
const jwt = require('jsonwebtoken')

//Route to register a new user with password
router.post("/users/register", (req, res) => {
  User.register(
    new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
    }),
    req.body.password,
    (err) => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

//Route to log in a user with password
router.post("/users/login", (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) throw err;
    res.json({
      isLoggedIn: !!user,
      items: user.items,
      user: user.username,
      token: jwt.sign({ id: user._id }, "coderbooksecretkey"),
    });
  });
});

module.exports = router;
