const express = require("express");
const cors = require("cors");
const animesRoutes = require("./src/routes/animes");
const usersRoutes = require("./src/routes/users");
const messagesRoutes = require("./src/routes/messages");
const authRoutes = require("./src/routes/auth");
require('./src/models');

const app = express();
const port = 3001;

app.use(cors())

app.use(express.json())

app.use(animesRoutes)
app.use(usersRoutes)
app.use(messagesRoutes)
app.use(authRoutes)

app.listen(port, () => {
    console.log(`A API está sendo executada na porta http://localhost:${port}`)
})
