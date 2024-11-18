// fileWithCallbacks.js

const fs = require('fs');

// File to work with
const filename = 'example.txt';

// Write data to the file
fs.writeFile(filename, 'Hello, this is a callback example!', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('Data written successfully using callbacks.');

    // Read data from the file
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('Data read using callbacks:', data);
    });
});


// For Output:
// type in terminal
// node fileWithCallbacks.js
