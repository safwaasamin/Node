// fileAsyncDemo.js

const fs = require('fs');
const fsp = require('fs').promises;

const callbackFilename = 'callbackDemo.txt';
const promiseFilename = 'promiseDemo.txt';

// Using Callbacks
fs.writeFile(callbackFilename, 'Data written with callbacks!', (err) => {
    if (err) {
        console.error('Callback write error:', err);
        return;
    }
    console.log('Callback: Data written successfully.');

    fs.readFile(callbackFilename, 'utf8', (err, data) => {
        if (err) {
            console.error('Callback read error:', err);
            return;
        }
        console.log('Callback: Data read:', data);
    });
});

// Using Promises
fsp.writeFile(promiseFilename, 'Data written with promises!')
    .then(() => {
        console.log('Promise: Data written successfully.');
        return fsp.readFile(promiseFilename, 'utf8');
    })
    .then((data) => {
        console.log('Promise: Data read:', data);
    })
    .catch((err) => {
        console.error('Promise error:', err);
    });

    // For Output:
// type in terminal
// node fileAsyncDemo.js

// Output: 
// Callback: Data written successfully.
// Promise: Data written successfully.
// Promise: Data read: Data written with promises!
// Callback: Data read: Data written with callbacks!
