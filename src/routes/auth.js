const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const tokenMiddleware = require("../middlewares/token");

router.post("/login", authController.login)

router.get(
    "/profile",
    tokenMiddleware.validateToken,
    authController.profile
)

module.exports = router;