// chalkExample.mjs or chalkExample.js (if type is module in package.json)

// Import the chalk library
import chalk from 'chalk';

// Basic styled messages
console.log(chalk.green('Success! Operation completed.'));
console.log(chalk.red('Error! Something went wrong.'));
console.log(chalk.blue('Info: This is an informational message.'));

// Styled messages with multiple styles
console.log(chalk.bgYellow.black('Warning! Check your inputs.'));
console.log(chalk.underline.bold('Underlined and bold text!'));

// Combine styles dynamically
const important = chalk.red.bold.italic;
console.log(important('This is a critical message!'));

// Style variables and use interpolation
const username = 'Safwaa';
console.log(chalk.cyan(`Hello, ${username}! Welcome to Chalk.`));




// Output

// PS P:\PROJECTS\Node\task4> node chalkExample.mjs
// Success! Operation completed.
// Error! Something went wrong.
// Info: This is an informational message.
// Warning! Check your inputs.
// Underlined and bold text!
// This is a critical message!
// Hello, Safwaa! Welcome to Chalk.