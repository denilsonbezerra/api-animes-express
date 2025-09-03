const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: "API Animes Express",
        description: "Esta documentação descreve a API da Animes Express, uma plataforma de chats para animes."
    },
    servers: [
        {
            url: 'http://localhost:3001'
        }
    ],
    components: {
        schemas: {
            animeBody: {
                id: 1,
                $title: "One Piece",
                $gender: "Shounen, Fantasia, Aventura",
                $description: "A jornada de Luffy até se tornar o rei dos piratas.",
                $rating: 5,
                $imageUrl: "https://link-da-imagem-de-capa-do-anime.com",
                $episodes: 112
            },
            someResponse: {
                name: "Jhon Doe",
                age: 29,
                diplomas: [
                    {
                        school: "XYZ University",
                        year: 2020,
                        completed: true,
                        internship: {
                            hours: 290,
                            location: "XYZ Company"
                        }
                    }
                ]
            },
            someEnum: {
                '@enum': [
                    "red",
                    "yellow",
                    "green"
                ]
            }
        },
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/app']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index')
})