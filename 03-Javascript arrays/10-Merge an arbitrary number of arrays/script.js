// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(...array) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(...array[i]);
  }
  return answer;
}

console.log(myFunction([1, 2, 3], [4, 5, 6])); //[1, 2, 3, 4, 5, 6]
console.log(myFunction(["a", "b", "c"], [4, 5, 6])); //['a', 'b', 'c', 4, 5, 6]
console.log(myFunction([true, true], [1, 2], ["a", "b"])); //[true, true, 1, 2, 'a', 'b']

//author's solution
function authorSolution(...arrays) {
  return arrays.flat();
}
