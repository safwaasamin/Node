const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle room joining
    socket.on('joinRoom', (room) => {
        socket.join(room);
        socket.to(room).emit('notification', `A user has joined room: ${room}`);
    });

    // Handle room leaving
    socket.on('leaveRoom', (room) => {
        socket.leave(room);
        socket.to(room).emit('notification', `A user has left room: ${room}`);
    });

    // Handle sending messages
    socket.on('message', (data) => {
        io.to(data.room).emit('message', { user: data.user, text: data.text });
    });

    // Handle FAQs
    socket.on('faq', (faqIndex) => {
        const faqs = [
            "FAQ 1 Answer",
            "FAQ 2 Answer",
            "FAQ 3 Answer",
            "FAQ 4 Answer",
        ];
        socket.emit('faqAnswer', faqs[faqIndex]);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
