const router = require("express").Router();

router.use("/api", require("./postingRoutes"));
router.use("/api", require("./userRoutes"));

module.exports = router;
