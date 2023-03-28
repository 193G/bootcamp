// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// In this code block, the spread operator (...) is being used to create a copy of the songs array. The spread operator can be used to spread the elements of an iterable (like an array) into a new array or into function arguments.
const newSongs = [...songs];

// The expected output in the console is a new array containing the same elements as songs array:
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // The reduce() method is used to reduce the array elements to a single value by applying a callback function that operates on each element of the array, with an accumulator (initial value 0 in this case) and the current value being iterated over.
  return array.reduce((a, b) => a + b, 0);
};
// TODO: console.log(addition(1, 2, 3)); will log 6 to the console because 1 + 2 + 3 = 6
console.log(addition(1, 2, 3));

// The spread syntax (...array) is being used as a parameter of the additionSpread() function. This syntax allows the function to accept any number of arguments, which will be automatically converted to an array and stored in the array variable
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// console.log(additionSpread(1, 2, 3)); will log 6 to the console because the spread operator is used to pass in the arguments as an array, and the reduce() method is used to sum the elements of the array.
console.log(additionSpread(1, 2, 3));

// console.log(additionSpread(1, 2, 3, 4, 100)); will log 110 to the console because the reduce() method will sum all the arguments passed to the function.
console.log(additionSpread(1, 2, 3, 4, 100));
