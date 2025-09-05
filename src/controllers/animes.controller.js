const { Animes } = require("../models");
const { sendNewAnimeEmail } = require("../services/emails");
// const redis = require("../config/redis");

async function postAnime(req, res) {
    /*
    #swagger.tags = ['Animes']
    #swagger.summary = 'Registrar um anime'
    #swagger.description = 'Esse endpoint registra um anime no banco de dados.'
    */

    if (req.user.role !== "admin") {
        return res.status(403).send({
            error: "Não autorizado!"
        })
    }

    try {
        const anime = await Animes.create(req.body);
        const adminName = req.user.name;

        await sendNewAnimeEmail(anime, adminName)
            .catch((error) => console.error("Erro ao enviar o email:", error))

        return res.status(201).send(anime)
    } catch (error) {
        return res.status(500).send("Ocorreu um erro ao criar o anime:" + { error: error.message })
    }

    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/animeBody"
                    }  
                }
            }
        } 
    */
}

async function getAnimes(req, res) {
    /*
    #swagger.tags = ['Animes']
    #swagger.summary = 'Carregar animes'
    #swagger.description = 'Carrega os animes na tela inicial para iniciar o chat entre usuários.'
    */

    try {
        // const cachedAnimes = await redis.get("animes")

        // if (cachedAnimes) {
        //     return res.send(JSON.parse(cachedAnimes))
        // }

        const animes = await Animes.findAll()

        // await redis.set("animes", JSON.stringify(animes), { EX: 60 })

        return res.send(animes)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    getAnimes,
    postAnime
}