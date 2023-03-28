// Import the fs module, which provides file system-related functionality
const fs = require('fs');

// Append the third command-line argument to a file called "log.txt",
// along with a newline character
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // If an error occurred, log the error to the console. Otherwise, log
  // a success message to the console.
  err ? console.error(err) : console.log('Commit logged!')
);

//  What is a ternary operator?
// In programming, a ternary operator is an operator that takes three operands and performs a certain operation based on a condition. The ternary operator is also known as the conditional operator, because it's often used to conditionally assign a value to a variable.

