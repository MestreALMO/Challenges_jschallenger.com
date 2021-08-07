// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(array) {
  var answer = 0;

  for (var i = 0; i < array.length; i++) {
    answer = answer + array[i];
  }

  return answer / array.length;
}

console.log(myFunction([10, 100, 40])); // 50
console.log(myFunction([10, 100, 1000])); // 370
console.log(myFunction([-50, 0, 50, 200])); // 50

//author's solution
function authorSolution(input) {
  return input.reduce((acc, cur) => acc + cur, 0) / input.length;
}
