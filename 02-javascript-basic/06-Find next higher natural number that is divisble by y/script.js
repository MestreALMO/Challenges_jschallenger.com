// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// console.log(9 % 3);

function myFunction(x, y) {
  var answer;

  if (x % y === 0) {
    answer = x;
    return answer;
  } else if (x < 0) {
    answer = 0;
    return answer;
  } else {
    for (var i = x + 1; (i - 1) % y != 0; i++) {
      if (i % y === 0) {
        answer = i;
        return answer;
      }
    }
  }
}

console.log(myFunction(1, 23));
console.log(myFunction(23, 23));
console.log(myFunction(7, 3));
console.log(myFunction(-5, 7));

// answer
// function myFunction(x, y) {
//   while (x % y !== 0) x++;
//   return x;
// }
