const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages.controller");
const messagesMiddleware = require("../middlewares/messages");
const tokenMiddleware = require("../middlewares/token");

router.post(
    "/messages",
    tokenMiddleware.validateToken,
    messagesMiddleware.validateMessage,
    messagesController.postMessage
)

router.get(
    "/messages/:groupId",
    tokenMiddleware.validateToken,
    messagesController.getMessages
)

module.exports = router;