const { createClient } = require("redis");
require("dotenv").config();

const redisClient = createClient({
    url: process.env.REDIS_URL
})

redisClient.on("error", (err) => console.error(`Erro ao se conectar no Redis ${err}`))

redisClient.connect()
            .then(console.log("Conectado ao Redis!"))
            .catch(console.error(`Erro ao tentar se conectar ao Redis.`))

module.exports = redisClient