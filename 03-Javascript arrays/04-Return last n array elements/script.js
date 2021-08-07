// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

function myFunction(array, n) {
  if (n > array.length) {
    return array;
  }

  let answer = [];

  for (var i = n; i >= 1; i--) {
    answer.push(array[array.length - i]);
  }

  return answer;
}

console.log(myFunction([1, 2, 3, 4, 5], 2)); //[ 4, 5 ]
console.log(myFunction([1, 2, 3], 6)); //[ 1, 2, 3 ]
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ 6, 7, 8 ]

// author's solution
function authorSolution(arr, n) {
  return arr.slice(-n);
}
