// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(a, b) {
  let answer;

  if (a < b) {
    answer = a / b;
  } else {
    answer = a * b;
  }

  return answer;
}

console.log(myFunction(10, 100));
console.log(myFunction(90, 45));
