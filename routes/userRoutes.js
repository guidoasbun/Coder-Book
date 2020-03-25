const router = require("express").Router();
const { User } = require("../models");

//Get one user
router.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
      .populate('postings')
      .then((user) => res.json(user))
      .catch((e) => console.error(e));
});

//Create one User
router.post("/users", (req, res) => {
  User.create(req.body)
      .then(() => res.sendStatus(200))
      .catch((e) => console.error(e));
});

module.exports = router;
