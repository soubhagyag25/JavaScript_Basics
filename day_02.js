const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the sum function
function sum(a, b) {
    console.log(`Sum of ${a} and ${b} is ${a + b}`);
}

// Prompt the user for the first number
rl.question('Enter number 1: ', (num1) => {
    // Prompt the user for the second number
    rl.question('Enter number 2: ', (num2) => {
        // Convert input strings to integers
        const a = parseInt(num1);
        const b = parseInt(num2);
        
        // Call the sum function with the inputs
        sum(a, b);
        
        // Close the readline interface
        rl.close();
    });
});
