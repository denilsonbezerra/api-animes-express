const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages.controller");
const tokenMiddleware = require("../middlewares/token");
const messagesMiddleware = require("../middlewares/messages");

router.post(
    "/message",
    tokenMiddleware.validateToken,
    messagesMiddleware.validateMessage,
    messagesController.postMessage
)

module.exports = router;