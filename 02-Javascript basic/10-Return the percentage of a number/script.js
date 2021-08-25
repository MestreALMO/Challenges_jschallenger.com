// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction({ number, percentage }) {
  return (number * percentage) / 100;
}

console.log(myFunction({ number: 100, percentage: 50 })); //50
console.log(myFunction({ number: 777, percentage: 2 })); //15.54
console.log(myFunction({ number: 500, percentage: 99 })); //495

//author's solution
function authorSolution({ number, percentage }) {
  return (number / 100) * percentage;
}
