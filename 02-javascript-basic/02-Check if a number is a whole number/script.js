// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(number) {
  return number == Math.floor(number);
}

console.log(myFunction(4));
console.log(myFunction(1.123));
