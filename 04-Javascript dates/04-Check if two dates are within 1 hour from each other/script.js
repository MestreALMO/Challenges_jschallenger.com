// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

function myFunction(date1, date2) {
  let timeDifference = Math.abs(
    (date1.getTime() - date2.getTime()) / (1000 * 60)
  );
  // 1000 milisecond, 60 segundos
  return timeDifference <= 60;
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
); // true
console.log(
  myFunction(new Date("2000/01/01 09:00:00"), new Date("2000/01/01 08:45:00"))
); // true
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:45:00"))
); // false
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:00:00"))
); // true

// author's solution
function myFunction(a, b) {
  return Math.abs(a - b) / 1000 / 60 <= 60;
}
