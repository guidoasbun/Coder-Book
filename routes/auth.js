const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

//@route     GET api/auth
//@desc      Get logged in user
//@access    Private
router.get("/auth", auth, async (req, res) => {
  try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
  }catch (e) {
      console.error(e.message);
      res.status(500).send('Server Error');
  }
});



//@route     POST api/auth
//@desc      Auth user & get token
//@access    Public
router.post(
  "/auth",
  [
    check("username", "Please include a valid username").exists(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
          process.env.JWT_SECRET, //Must put in .env before deployment
        {
          expiresIn: 3600, //Must switch to 3600 before deployment
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
