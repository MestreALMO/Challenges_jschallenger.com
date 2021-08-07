// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

function myFunction(array, num) {
  let smallerThanNum = (value) => {
    return value > num;
  };
  let answer = array.filter(smallerThanNum).reduce((acc, curr) => acc + curr);
  return answer;
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); //25
console.log(myFunction([-10, -11, -3, 1, -4], -3)); //1
console.log(myFunction([78, 99, 100, 101, 401], 99)); //602

// author's Solution
function authorSolution(arr, num) {
  return arr.reduce((sum, cur) => {
    if (cur > num) return sum + cur;
    return sum;
  }, 0);
}
