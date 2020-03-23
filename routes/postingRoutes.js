const router = require("express").Router();
const { Posting } = require("../models");

//GET all postings
router.get("/postings", (req, res) => {
    Posting.find()
});

//POST one item
router.post("/postings", (req, res) => {
    Posting.create()
});

//PUT one item
router.put("/postings/:id", (req, res) => {
    Posting.findByIdAndUpdate()
});

//DELETE one item
router.delete("/postings/:id", (req, res) => {

});

module.exports = router;
