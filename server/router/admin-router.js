const express = require("express")
const { getAllUsers, getAllContacts } = require("../controller/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")
const router = express.Router()

router.route("/users").get(authMiddleware,adminMiddleware, getAllUsers)
router.route("/contacts").get(authMiddleware,adminMiddleware,  getAllContacts)

module.exports = router