const express = require("express");
const serviceController = require("../controller/service-controller");
const router = express.Router();

router.route("/services").get(serviceController);

module.exports = router;
