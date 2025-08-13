const express = require("express");
const router = express.Router();
const usersMiddleware = require("../middlewares/users");
const usersController = require("../controllers/users.controller");
const tokenMiddleware = require("../middlewares/token");

router.post(
    "/user",
    usersMiddleware.validatePostUser,
    usersController.postUser
)

router.get(
    "/users",
    tokenMiddleware.validateToken,
    usersController.getUsers
)

router.get(
    "/users/:id",
    tokenMiddleware.validateToken,
    usersController.getUser
)

router.put(
    "/users/:id",
    tokenMiddleware.validateToken,
    usersController.updateUser
)

module.exports = router;