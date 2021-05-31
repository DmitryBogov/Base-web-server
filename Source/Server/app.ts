// Server main
const config = require('config');
const express = require("express");
const app = express();

const PORT = config.has('SERVER_PORT') ? config.get('SERVER_PORT') : 3000;

const server = app.listen(PORT , console.log("Server started on port:", PORT));

const io = require('socket.io')(server)

// Доступ к папке с ресурсами 
app.use(express.static('Resources'))

// 
io.on('connection', socket => {
    console.log("Socket is connected: ", socket );
    
    socket.on('event', clientData => { 
        console.log("Data from Client:", clientData);
        
    });

    socket.emit('request', {DataFromServer: "Hello from Server !"});

});

app.get('/', function (req, res) {
  res.send('Hello World')
  
});
 
