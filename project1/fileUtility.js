// fileUtility.js

const fs = require('fs');
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to create or update a file
function createOrUpdateFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error('Error creating or updating the file:', err);
        } else {
            console.log(`File "${filename}" has been created/updated successfully.`);
        }
    });
}

// Function to read a file
function readFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            console.log(`Content of "${filename}":\n${data}`);
        }
    });
}

// Function to delete a file
function deleteFile(filename) {
    fs.unlink(filename, (err) => {
        if (err) {
            console.error('Error deleting the file:', err);
        } else {
            console.log(`File "${filename}" has been deleted.`);
        }
    });
}

// Main menu for user interaction
function mainMenu() {
    console.log(`
        1. Create or Update a File
        2. Read a File
        3. Delete a File
        4. Exit
    `);

    rl.question('Choose an option: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Enter the filename: ', (filename) => {
                    rl.question('Enter the content: ', (content) => {
                        createOrUpdateFile(filename, content);
                        mainMenu();
                    });
                });
                break;
            case '2':
                rl.question('Enter the filename: ', (filename) => {
                    readFile(filename);
                    mainMenu();
                });
                break;
            case '3':
                rl.question('Enter the filename to delete: ', (filename) => {
                    deleteFile(filename);
                    mainMenu();
                });
                break;
            case '4':
                console.log('Exiting the application.');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please try again.');
                mainMenu();
                break;
        }
    });
}

// Start the application
mainMenu();
