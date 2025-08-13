const { Users } = require("../models");

async function postUser(req, res) {
    try {
        await Users.create(req.body)

        res.status(201).send(`A conta de ${req.body.name} foi cadastrada com sucesso!`)
    } catch (error) {
        res.status(500).send(`Ocorreu um erro ao criar o usuário: ${{ error: error.message }}`)
    }
}

async function getUsers(req, res) {
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