const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages.controller");
const messagesMiddleware = require("../middlewares/messages");
const tokenMiddleware = require("../middlewares/token");

router.post(
    "/message",
    tokenMiddleware.validateToken,
    messagesMiddleware.validateMessage,
    messagesController.postMessage
)

module.exports = router;