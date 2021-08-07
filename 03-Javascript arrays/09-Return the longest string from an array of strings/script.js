// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(array) {
  var answer = array.sort((a, b) => b.length - a.length);

  return answer[0];
}

console.log(myFunction(["help", "me"])); //'help'
console.log(myFunction(["I", "need", "candy"])); //'candy'

//author's solution
function authorSolution(input) {
  return input.reduce((a, b) => (a.length <= b.length ? b : a));
}
