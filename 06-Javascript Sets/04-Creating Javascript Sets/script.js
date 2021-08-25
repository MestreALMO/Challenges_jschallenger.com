// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

function myFunction(a, b, c) {
  var answer = new Set([a, b, c]);
  return answer;
}

console.log(myFunction(1, "b", 3)); // new Set([1, 'b', 3])
console.log(myFunction(NaN, null, false)); // new Set([NaN, null, false])
console.log(myFunction(myFunction("a", ["b"], { c: 3 }))); // new Set(['a', ['b'], { c: 3 }])

// author's solution
function authorSolution(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}
