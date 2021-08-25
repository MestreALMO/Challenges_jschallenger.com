// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB

function myFunction(set1, set2) {
  var answer = new Set([...set1].filter((x) => set2.has(x)));
  return answer;
}

console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))); // new Set()
console.log(myFunction(new Set("12345"), new Set([..."45678"]))); // new Set('45')
console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4]))); // new Set([2, 3])

// author's solution
function authorSolution(setA, setB) {
  const int = new Set();
  setA.forEach((el) => setB.has(el) && int.add(el));
  return int;
}
