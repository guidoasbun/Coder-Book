const router = require("express").Router();

router.use("/api", require("./postingRoutes"));
router.use("/api", require("./userRoutes"));
// router.use("/api", require("./auth"));

module.exports = router;
