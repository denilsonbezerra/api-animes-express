const jwt = require("jsonwebtoken");
const { Users } = require("../models");

async function validateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({
            error: "Não há um token de autorização"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await Users.findOne({
            where: {
                id: decoded.id
            }
        })

        if (!user) {
            return res.status(401).send({
                error: "Token inválido!"
            })
        }

        req.user = user;

        next()
    } catch (error) {
        return res.status(401).send({
            error: "Token inválido!"
        })
    }
}

module.exports = {
    validateToken
}