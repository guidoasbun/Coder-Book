const router = require("express").Router();
const { Posting } = require("../models");

//GET all postings
router.get("/postings", (req, res) => {
  Posting.find()
    .then((items) => res.json(items))
    .catch((e) => console.error(e));
});

//POST one item
router.post("/postings", (req, res) => {
  Posting.create(req.body)
    .then(() => res.sendStatus(200))
    .catch((e) => console.error(e));
});

//PUT one item
router.put("/postings/:id", (req, res) => {
  Posting.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(200).catch((e) => console.error(e))
  );
});

//DELETE one item
router.delete("/postings/:id", (req, res) => {
  Posting.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((e) => console.error(e));
});

module.exports = router;
