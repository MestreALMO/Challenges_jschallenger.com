// Write a function that takes as argument an object with the properties a and b, each containing a date instance
// It should return true if date a is earlier than date b
// It should return false otherwise

function myFunction({ a, b }) {
  return a.getTime() < b.getTime();
}

console.log(
  myFunction({
    a: new Date("2000/01/01 08:00:00"),
    b: new Date("2000/01/01 08:45:00"),
  })
); // true
console.log(
  myFunction({
    a: new Date("2000/01/01 08:45:00"),
    b: new Date("2000/01/01 08:00:00"),
  })
); // false
console.log(
  myFunction({
    a: new Date("2000/01/01 08:00:00"),
    b: new Date("2000/01/01 08:00:00"),
  })
); // false

// author's solution
function authorSolution({ a, b }) {
  return a < b;
}
