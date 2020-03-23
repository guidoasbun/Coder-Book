const router = require("express").Router();

router.use("/api", require("./postingRoutes"));

module.exports = router;
