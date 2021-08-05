// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(number) {
  function checkPrime(number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  if (checkPrime(number)) {
    return number;
  } else {
    while (checkPrime(number) === false) {
      number++;
    }
  }
  return number;
}

console.log(myFunction(38)); //41
console.log(myFunction(7)); //7
console.log(myFunction(115)); //127
console.log(myFunction(2000)); //2003

// author's solution
function authorSolution(input) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  let n = input;
  while (!isPrime(n)) n++;
  return n;
}
