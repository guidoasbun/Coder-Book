const router = require("express").Router();
const { Posting, User } = require("../models");
// const passport = require("passport");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

/*-------------------------------------------------------------------------------*/

//@route     GET api/postings
//@desc      Get all users postings
//@access    Private

router.get("/postings", auth, async (req, res) => {
  try {
    const postings = await Posting.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(postings);
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

//@route     POST api/postings
//@desc      Add new postings
//@access    Private

router.post(
  "/postings",
  [
    auth,
    [
      check("entryTitle", "Entry title is required").not().isEmpty(),
      check("entry", "Post entry is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { entryTitle, entry } = req.body;
    try {
      const newPosting = new Posting({ entryTitle, entry, owner: req.user.id });
      const posting = await newPosting.save();
      res.json(posting);
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route     POST api/postings/:id
//@desc      Update posting
//@access    Private

router.put("/postings/:id", auth, async (req, res) => {
  const { entryTitle, entry } = req.body;

  // Building posting object
  const postingFields = {};
  if (entryTitle) postingFields.entryTitle = entryTitle;
  if (entry) postingFields.entry = entry;

  try {
    let posting = await Posting.findById(req.params.id);

    if (!posting) return res.status(404).json({ msg: "Posting not found" });

    //Make sure user owns post
    if (posting.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    posting = await Posting.findByIdAndUpdate(
      req.params.id,
      { $set: postingFields },
      { new: true }
    );

    res.json(posting);
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

//@route     DELETE api/postings/:id
//@desc      Delete contact
//@access    Private

router.delete("/postings/:id", auth, async (req, res) => {
  try {
    let posting = await Posting.findById(req.params.id);

    if (!posting) return res.status(404).json({ msg: "Posting not found" });

    // Make sure user owns contact
    if (posting.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Posting.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contact removed" });
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

/*-------------------------------------------------------------------------------*/

//Get all postings

// Get all postings from user
// GET all items from user
// router.get("/postings", (req, res) => {
//     console.log(req)
// Posting.find({ owner: req.user._id })
//   .then((items) => res.json(items))
//   .catch((e) => console.error(e));
// });

/*-------------------------------------------------------------------*/

//Get all postings from user
// GET all items from user
// router.get("/postings", passport.authenticate("jwt"), (req, res) => {
//   Posting.find({ owner: req.user._id })
//     .then((items) => res.json(items))
//     .catch((e) => console.error(e));
// });

//POST one item
// req.user has the user info
// router.post("/postings", passport.authenticate("jwt"), (req, res) => {
//   console.log(req.user);
//   // res.sendStatus(200)
//   Posting.create({
//     entryTitle: req.body.entryTitle,
//     entry: req.body.entry,
//     owner: req.user._id,
//   })
//     .then(({ _id }) => {
//       User.findByIdAndUpdate(req.user._id, {
//         $push: { postings: _id },
//       }).then(() => res.sendStatus(200));
//     })
//     .catch((e) => console.error(e));
// });

//PUT one item
// router.put("/postings/:id", passport.authenticate("jwt"), (req, res) => {
//   Posting.findByIdAndUpdate(req.params.id, req.body).then(({ _id }) => {
//     res.sendStatus(200).catch((e) => console.error(e));
//   });
// });

//DELETE one item
// router.delete("/postings/:id", passport.authenticate("jwt"), (req, res) =>
//   Posting.findByIdAndDelete(req.params.id)
//     .then(({ _id, owner }) => {
//       User.findByIdAndUpdate(owner, { $pull: { postings: _id } }).then(() =>
//         res.sendStatus(200)
//       );
//     })
//     .catch((e) => console.error(e))
// );

// module.exports = router;
