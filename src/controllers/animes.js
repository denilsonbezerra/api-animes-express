const { Animes } = require("../models");

async function getAnimes(req, res) {
    try {
        const animes = await Animes.findAll()
        res.send(animes)
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}

async function postAnime(req, res) {
    const anime = req.body;

    if (req.user.role !== "admin") {
        return res.status(403).send({
            error: "Não autorizado!"
        })
    }

    try {
        const newAnime = await Animes.create(anime)
        res.status(201).send(newAnime)
    } catch (error) {
        res.status(500).send("Ocorreu um erro ao criar o anime:" + { error: error.message })
    }
}

module.exports = {
    getAnimes,
    postAnime
}