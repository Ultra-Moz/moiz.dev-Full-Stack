const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/auth-controller");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const { signUpScheme, loginSchema } = require("../validators/auth-validator");

//defines route of the website
router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signUpScheme), authcontroller.register);
router.route("/login").post(validate(loginSchema), authcontroller.login);
router.route("/user").get(authMiddleware, authcontroller.user);

module.exports = router;
