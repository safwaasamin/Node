const socket = io();
const room = 'customer-support'; // Default room for customer support
socket.emit('joinRoom', room);

// Display messages
socket.on('message', (data) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${data.user}: ${data.text}`;
    document.getElementById('messages').appendChild(messageDiv);
});

// Display notifications
socket.on('notification', (message) => {
    const notificationDiv = document.createElement('div');
    notificationDiv.textContent = message;
    document.getElementById('messages').appendChild(notificationDiv);
});

// Display FAQ answers
socket.on('faqAnswer', (answer) => {
    const faqDiv = document.createElement('div');
    faqDiv.textContent = `FAQ Answer: ${answer}`;
    document.getElementById('messages').appendChild(faqDiv);
});

// Send message
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    socket.emit('message', { user: 'Customer', text: message, room });
    messageInput.value = '';
}

// Send FAQ
function sendFaq(index) {
    socket.emit('faq', index);
}
