const router = require("express").Router();
const { Posting, User } = require("../models");
const passport = require("passport");

//Get all postings from user
// GET all items from user
router.get("/postings", passport.authenticate("jwt"), (req, res) => {
  Posting.find({ owner: req.user._id })
    .then((items) => res.json(items))
    .catch((e) => console.error(e));
});

//POST one item
// req.user has the user info
router.post("/postings", passport.authenticate("jwt"), (req, res) => {
  console.log(req.user);
  // res.sendStatus(200)
  Posting.create({
    entryTitle: req.body.entryTitle,
    entry: req.body.entry,
    owner: req.user._id,
  })
    .then(({ _id }) => {
      User.findByIdAndUpdate(req.user._id, {
        $push: { postings: _id },
      }).then(() => res.sendStatus(200));
    })
    .catch((e) => console.error(e));
});

//PUT one item
router.put("/postings/:id", passport.authenticate("jwt"), (req, res) => {
  Posting.findByIdAndUpdate(req.params.id, req.body).then(({ _id }) => {
    res.sendStatus(200).catch((e) => console.error(e));
  });
});

//DELETE one item
router.delete("/postings/:id", passport.authenticate("jwt"), (req, res) =>
  Posting.findByIdAndDelete(req.params.id)
    .then(({ _id, owner }) => {
      User.findByIdAndUpdate(owner, { $pull: { postings: _id } }).then(() =>
        res.sendStatus(200)
      );
    })
    .catch((e) => console.error(e))
);

module.exports = router;
