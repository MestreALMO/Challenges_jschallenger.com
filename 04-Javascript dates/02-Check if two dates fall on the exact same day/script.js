// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

function myFunction(date1, date2) {
  return (
    date1.getYear() === date2.getYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01"))); // true
console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/02"))); // false
console.log(myFunction(new Date("2001/01/01"), new Date("2000/01/01"))); // false
console.log(myFunction(new Date("2000/11/01"), new Date("2000/01/01"))); // false

// author's solution
function authorSolution(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
