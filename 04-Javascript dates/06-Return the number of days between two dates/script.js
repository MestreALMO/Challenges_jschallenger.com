// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(date1, date2) {
  return Math.abs((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));
}

console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01"))); // 10
console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01"))); // 7457

// author's solution
function myFunction(a, b) {
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24;
}
