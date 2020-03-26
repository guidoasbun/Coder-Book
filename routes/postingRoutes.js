const router = require("express").Router();
const { Posting, User } = require("../models");

//POST one item
router.post("/postings", (req, res) =>
  Posting.create(req.body)
    .then(({ _id }) => {
      User.findByIdAndUpdate(req.body.owner, {
        $push: { postings: _id },
      }).then(() => res.sendStatus(200));
    })
    .catch((e) => console.error(e))
);

//PUT one item
router.put("/postings/:id", (req, res) => {
  Posting.findByIdAndUpdate(req.params.id, req.body).then(({ _id }) => {
    res.sendStatus(200).catch((e) => console.error(e));
  });
});

//DELETE one item
router.delete("/postings/:id", (req, res) =>
  Posting.findByIdAndDelete(req.params.id)
    .then(({ _id, owner }) => {
      User.findByIdAndUpdate(owner, { $pull: { postings: _id } }).then(() =>
        res.sendStatus(200)
      );
    })
    .catch((e) => console.error(e))
);

module.exports = router;
