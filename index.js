// const expess = require("express")
// const app = expess()

// const bodyparser = require("body-parser")

// const https = require('https')
// const fs = require('fs');

// app.use(bodyparser.urlencoded({extended: true}))
// const options = {
//     key: fs.readFileSync('./certificado/key.pem'),
//     cert: fs.readFileSync('./certificado/cert.pem')
// };


// https.createServer(options, app).listen(8082)
// // --------
// app.post("/post", (req, resp) => {
//     console.log("Nova request post!");

//     resp.send("Olá.")
// })

// app.use((req, resp, next) => {
//     console.log("Nova request !!!");

//     resp.send("Olá.")

//     next()
// })


var webSocket = require('websocket').client;
var client = new webSocket()

client.on('connectFailed', (erro) => {
    console.log("Erro ao se conectar");
    console.log(erro);
})

client.on("connect", (conexao) => {
    console.log("Conectado!");

    conexao.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });
    conexao.on('close', function () {
        console.log('echo-protocol Connection Closed');
    });
    conexao.on('message', function (message) {
        console.log("Received:");
        console.log(JSON.parse(message.utf8Data));
    });
})

client.connect("wss://gateway.discord.gg/?v=9&encoding=json")