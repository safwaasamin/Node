// fileWithPromises.js

const fs = require('fs').promises;

// File to work with
const filename = 'examplePromises.txt';

// Write data to the file
fs.writeFile(filename, 'Hello, this is a promise example!')
    .then(() => {
        console.log('Data written successfully using promises.');

        // Read data from the file
        return fs.readFile(filename, 'utf8');
    })
    .then((data) => {
        console.log('Data read using promises:', data);
    })
    .catch((err) => {
        console.error('Error:', err);
    });


    // For Output:
// type in terminal
// node fileWithPromises.js
