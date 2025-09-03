const { Messages } = require("../models");

async function postMessage(req, res) {
    /*
    #swagger.tags = ['Messages']
    #swagger.summary = 'Postar uma mensagem'
    #swagger.description = 'Esse endpoint é usado para postar uma mensagem.'
    */

    try {
        await Messages.create(req.body)
        return res.status(201).send("Mensagem publicada com sucesso!")
    } catch (error) {
        return res.status(500).send("Ocorreu um erro ao publicar a mensagem:" + { error: error.message })
    }
}

async function getMessages(req, res) {
    /*
    #swagger.tags = ['Messages']
    #swagger.summary = 'Carregar mensagens'
    #swagger.description = 'Esse endpoint é usado para carregar as mensagens do chat.'
    */

    const { groupId } = req.params;
    
    try{
        const messages = await Messages.findAll({
            where: {
                groupId: groupId
            }
        })

        return res.send(messages)
    } catch (error) {
        return res.status(500).send("Ocorreu um erro ao buscar as mensagens:" + { error: error.message })
    }
}

module.exports = {
    postMessage,
    getMessages
}