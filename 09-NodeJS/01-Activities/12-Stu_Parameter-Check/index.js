const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 === arg2) {
  console.log(`The arguments "${arg1}" and "${arg2}" are the same.`);
} else {
  console.log(`The arguments "${arg1}" and "${arg2}" are different.`);
}