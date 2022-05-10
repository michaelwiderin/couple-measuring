const http = require('http');
const express = require('express');
const ws = require('ws');

const port = 3000;
const app = express();
const server = http.createServer(app);
const wsServer = new ws.Server({ server });

wsServer.on('connection', (client, req) => {
    handleConnection(client, req);
    handleMessages(client);
});

server.listen(port, () => {
    console.log(`Websocket server started on port ` + port);
});

const handleConnection = (client, req) => {
    const message = {
        "status": 200,
        "message": "Connection established successfully!"
    };

    console.log(`Client with ip: ${req.socket.remoteAddress} connected!`);
};

const handleMessages = (client) => {
    client.on('message', (data) => {
        const received = JSON.parse(data.toString());
        let response = {};

        switch (parseInt(received['status'])) {
            case 1:
                response = {
                    "status": 2
                };
                break;
            case 3:
                response = {
                    "status": 3,
                    "time": 22430 
                };
        }

        wsServer.clients.forEach(x => {
            x.send(JSON.stringify(response));
        });
    });
};
