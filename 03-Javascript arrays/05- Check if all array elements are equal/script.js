// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] !== array[i]) {
      return false;
    }
  }
  return true;
}

console.log(myFunction([true, true, true, true])); // true
console.log(myFunction(["test", "test", "test"])); // true
console.log(myFunction([1, 1, 1, 2])); // false
console.log(myFunction(["10", 10, 10, 10])); // false

//autho's solution
function authorSolution(input) {
  return new Set(input).size === 1;
}
