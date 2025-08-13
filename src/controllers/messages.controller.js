const { Messages } = require("../models");

async function postMessage(req, res) {
    try {
        await Messages.create(req.body)
        return res.status(201).send("Mensagem publicada com sucesso!")
    } catch (error) {
        return res.status(500).send("Ocorreu um erro ao publicar a mensagem:" + { error: error.message })
    }
}

module.exports = {
    postMessage
}