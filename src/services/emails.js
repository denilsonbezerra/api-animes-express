const email = require('@sendgrid/mail');
const EMAIL_NEW_ANIME_TEMPLATE = require('../utils/constant_template');
const juice = require('juice');
require('dotenv').config();

email.setApiKey(process.env.SENDGRID_API_KEY)

async function sendNewAnimeEmail(anime, adminName) {
    const emailContent = {
        to: 'denilson.bezerra.dev@gmail.com',
        from: 'denilsonbezerra.10@hotmail.com',
        subject: 'Novo anime cadastrado!',
        html: juice(EMAIL_NEW_ANIME_TEMPLATE(anime, adminName)),
    }

    await email.send(emailContent)
}

module.exports = {
    sendNewAnimeEmail
}