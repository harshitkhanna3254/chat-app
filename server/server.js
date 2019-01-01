const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');


const port = process.env.PORT || 3000;
publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath))


io.on('connection', (socket) => {
    console.log("New user connected.")

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat App'))

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user joined'))



    socket.on('disconnect', () => {
        console.log("User disconnected.")
    })

    socket.on('createMessage', (message) => {
        console.log("Client wants to send a message", message);
        io.emit('newMessage', generateMessage(message.from, message.text))
    })

})



server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
