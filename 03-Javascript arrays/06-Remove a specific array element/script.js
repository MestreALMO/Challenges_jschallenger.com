// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(array, value) {
  answer = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      answer.push(array[i]);
    }
  }

  return answer;
}

console.log(myFunction([1, 2, 3], 2)); // [1, 3]
console.log(myFunction([1, 2, "2"], "2")); // [1, 2]
console.log(myFunction([false, "2", 1], false)); // ['2', 1]
console.log(myFunction([1, 2, "2", 1], 1)); // [2, '2']

//author's solution
function authorSolution(arr, value) {
  return arr.filter((cur) => cur !== value);
}
