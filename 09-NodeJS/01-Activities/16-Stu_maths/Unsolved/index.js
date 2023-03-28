// TODO: Import `maths.js`

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`



// Import the maths.js module to perform mathematical operations
const maths = require('./maths');

// Retrieve the operation to perform from the command line arguments
const operation = process.argv[2];

// Retrieve the first and second numbers to use in the operation from the command line arguments
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

// Declare a variable to store the result of the operation
let result;

// Based on the operation provided, use the appropriate function from the maths.js module to perform the operation
if (operation === 'sum') {
  result = maths.sum(num1, num2);
} else if (operation === 'difference') {
  result = maths.difference(num1, num2);
} else if (operation === 'product') {
  result = maths.product(num1, num2);
} else if (operation === 'quotient') {
  result = maths.quotient(num1, num2);
} else {
  // If an invalid operation was provided, log an error message and exit the program with an error code
  console.error('Invalid operation');
  process.exit(1);
}

// Print the result of the operation to the console
console.log(result);
