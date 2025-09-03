const app = require('./src/app');
const http = require('http');
const { Server } = require('socket.io')
const chatSocket = require('./src/sockets/chat')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');

const port = 3001;
const server = http.createServer(app);

app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log("Novo cliente conectado:", socket.id)

    chatSocket(io, socket)
    
    socket.on('disconnect', () => {
        console.log("Cliente desconectado:", socket.id)
    })
})

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})