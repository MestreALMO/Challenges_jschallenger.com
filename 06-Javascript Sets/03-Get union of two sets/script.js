// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

function myFunction(set1, set2) {
  var answer = new Set([...set1, ...set2]);
  return answer;
}

console.log(myFunction(new Set("123"), new Set("234"))); // new Set('1234')
console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))); // new Set([1, 2, 3, 4, 5])
console.log(
  myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
); // new Set([false, NaN, true])

// author's solution
function authorSolution(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}
