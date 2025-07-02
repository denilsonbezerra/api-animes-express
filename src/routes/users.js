const express = require("express");
const router = express.Router();
const usersMiddleware = require("../middlewares/users");
const usersController = require("../controllers/users");
const tokenMiddleware = require("../middlewares/token");

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