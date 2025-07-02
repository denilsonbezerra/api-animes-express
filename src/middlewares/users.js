const { Users } = require("../models");
const bcrypt = require("bcrypt");

async function validatePostUser(req, res, next) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send({
            error: "Obrigatório preenhcer todos os campos!"
        })
    }

    if (password.length < 8 || password.length > 16) {
        return res.status(400).send({
            error: "A senha precisa ter entre 8 e 16 caracteres!"
        })
    }

    const existsUser = await Users.findOne({
        where: {
            email: email
        }
    })

    if (existsUser) {
        return res.status(400).send({
            error: "Já existe uma conta cadastrada com esse email!"
        })
    }

    const hashedPassword = await bcrypt.hash(
        password,
        10
    )

    req.body.password = hashedPassword

    next()
}

module.exports = {
    validatePostUser
}