const express = require("express");
const cors = require("cors");
const animesRoutes = require("./routes/animes.routes");
const usersRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");
const messagesRoutes = require("./routes/messages.routes");
const Sentry = require("./config/sentry");
require("./models");

const app = express();

app.use(cors())
app.use(express.json())

app.use(animesRoutes)
app.use(usersRoutes)
app.use(authRoutes)
app.use(messagesRoutes)

Sentry.setupExpressErrorHandler(app)

module.exports = app;