// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

function myFunction(argument) {
  return argument;
}

console.log(myFunction(new Set([1, 2, 3]))); // [1, 2, 3]
console.log(myFunction(new Set([123]))); // [123]
console.log(myFunction(new Set(["1", "2", "3"]))); // ['1', '2', '3']
console.log(myFunction(new Set("123"))); // ['1', '2', '3']

// author's solution
function authorSolution(set) {
  return [...set];
}
