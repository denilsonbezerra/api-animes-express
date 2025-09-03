const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function login(req, res) {
    /*
    #swagger.tags = ['Auth']
    #swagger.summary = 'Login de usuários'
    #swagger.description = 'Esse endpoint é usado para logar um usuário.'
    */

    const { email, password } = req.body;

    try {
        const user = await Users.findOne({
            where: {
                email: email
            }
        })

        if (!user) {
            return res.status(401).send({
                error: "Usuário não encontrado!"
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).send("Usuário ou senha incorretos!")
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        res.status(200).send({ token })
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}

function profile(req, res) {
    /*
    #swagger.tags = ['Auth']
    #swagger.summary = 'Perfil do usuário'
    #swagger.description = 'Esse endpoint é usado para retornar o perfil do usuário para o front-end.'
    */

    const user = req.user;

    return res.send({
        name: user.name,
        email: user.email,
        role: user.role
    })
}

module.exports = {
    login,
    profile
}