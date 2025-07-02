const express = require("express");
const router = express.Router();
const animesController = require("../controllers/animes");
const tokenMiddleware = require("../middlewares/token");

router.post(
    "/anime",
    tokenMiddleware.validateToken,
    animesController.postAnime
)

router.get(
    "/animes",
    tokenMiddleware.validateToken,
    animesController.getAnimes
)

module.exports = router;