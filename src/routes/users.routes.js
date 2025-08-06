const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");
const tokenMiddleware = require("../middlewares/token");
const usersMiddleware = require("../middlewares/users");

router.post(
    "/user",
    usersMiddleware.validatePostUser,
    usersController.postUser
)

router.get(
    "/user",
    tokenMiddleware.validateToken,
    usersController.getUser
)

router.get(
    "/users",
    tokenMiddleware.validateToken,
    usersController.getUsers
)

router.get(
    "/user",
    tokenMiddleware.validateToken,
    usersController.getUser
)

module.exports = router;