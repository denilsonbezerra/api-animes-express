const { Animes } = require("../models");
const redis = require("../config/redis");

async function getAnimes(req, res) {
    try {
        const cachedAnimes = await redis.get("animes")

        if (cachedAnimes) {
            return res.send(JSON.parse(cachedAnimes))
        }

        const animes = await Animes.findAll()

        await redis.set("animes", JSON.stringify(animes), { EX: 60 })

        return res.send(animes)
    } catch (error) {
        return res.status(500).send({
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

        return res.status(201).send(newAnime)
    } catch (error) {
        return res.status(500).send("Ocorreu um erro ao criar o anime:" + { error: error.message })
    }
}

module.exports = {
    getAnimes,
    postAnime
}