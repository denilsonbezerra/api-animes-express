const sequelize = require("../config/database");
const Animes = require("./animes");
const Users = require("./users");

sequelize.sync({ alter: true })
    .then(() => console.log("Tabelas sincronizadas!"))
    .catch((error) => console.log("Erro ao sicronizar tabelas:", error)
)

module.exports = {
    Animes,
    Users
}