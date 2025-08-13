function validateMessage(req, res, next) {
    const { content, groupId } = req.body;
    const user = req.user;

    if (!content || !groupId) {
        return res.status(400).send({
            error: "Os dados de content e groupId sãp obrigatórios"
        })
    }

    if (typeof content !== "string" || typeof groupId !== "number") {
        return res.status(400).send({
            error: "Os dados de content e groupId devem ser do tipo string e number respectivamente"
        })
    }

    req.body.senderId = user.id

    next()
}

module.exports = {
    validateMessage
}