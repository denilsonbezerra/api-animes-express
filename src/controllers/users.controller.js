const { Users } = require("../models");

async function postUser(req, res) {
    /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Criar um usuário'
    #swagger.description = 'Esse endpoint registra um usuário no banco de dados.'
    */

    try {
        await Users.create(req.body)

        res.status(201).send(`A conta de ${req.body.name} foi cadastrada com sucesso!`)
    } catch (error) {
        res.status(500).send(`Ocorreu um erro ao criar o usuário: ${{ error: error.message }}`)
    }
}

async function getUsers(req, res) {
    /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Busca usuários'
    #swagger.description = 'Esse endpoint retorna todos os usuários cadastrados.'
    */

    try {
        if (req.user.role !== "admin") {
            return res.status(403).send({
                error: "Não autorizado!"
            })
        }

        const users = await Users.findAll()
        res.send(users)
    } catch (error) {
        res.status(500).send({
            error: `Ocorreu um erro ao buscar os usuários: ${error.message} `
        })
    }
}

async function getUser(req, res) {
    /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Buscar um usuário'
    #swagger.description = 'Esse endpoint busca um usuário específico.'
    */

    if (req.user.id !== req.params.id && req.user.role !== "admin") {
        return res.status(403).send({
            error: "Não autorizado!"
        })
    }

    try {
        const user = await Users.findOne({
            where: {
                id: req.params.id
            }
        })

        res.send(user)
    } catch (error) {
        res.status(500).send({
            error: `Ocorreu um erro ao buscar o usuário: ${error.message} `
        })
    }
}

async function updateUser(req, res) {
    /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Editar um usuário'
    #swagger.description = 'Esse endpoint é usado para editar um usuário.'
    */

    if (req.user.id !== req.params.id && req.user.role !== "admin") {
        return res.status(403).send({
            error: "Não autorizado!"
        })
    }

    try {
        const user = await Users.findOne({
            where: {
                id: req.params.id
            }
        })

        return res.send(user)
    } catch (error) {
        return res.status(500).send({
            error: `Ocorreu um erro ao buscar o usuário: ${error.message} `
        })
    }
}

module.exports = {
    postUser,
    getUsers,
    getUser,
    updateUser
}