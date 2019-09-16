// const express = require('express');
// const connection = require('./connection');
// const io = require('socket.io')(3000);
// const router = express.Router();

// const users = {};

// const ClientManager = require('./ClientManager');
// const ChatroomManager = require('./ChatroomManager');
// const makeHandlers = require('./handlers');

// const clientManager = ClientManager();
// const chatroomManager = ChatroomManager();

// io.on('connection'), socket => {
//   // socket.emit('chat-message', 'message');

//   // socket.on('send-chat-message', message => {
//   //   socket.broadcast.emit('chat-message', message);
//   // });
//   const {
//     handleRegister,
//     handleJoin,
//     handleLeave,
//     handleMessage,
//     handleGetChatrooms,
//     handleGetAvailableUsers,
//     handleDisconnect
//   } = makeHandlers(client, clientManager, chatroomManager);

//   console.log('client connected...', socket.id);
//   clientManager.addClient(socket);
//   socket.on('register', handleRegister);

//   socket.on('join', handleJoin);

//   socket.on('leave', handleLeave);

//   socket.on('message', handleMessage);

//   socket.on('chatrooms', handleGetChatrooms);

//   socket.on('availableUsers', handleGetAvailableUsers);

//   socket.on('disconnect', function () {
//     console.log('socket disconnect...', socket.id);
//     handleDisconnect();
//   });

//   socket.on('error', function (err) {
//     console.log('received error from socket:', socket.id);
//     console.log(err);
//   });
// };

// module.exports = router;
