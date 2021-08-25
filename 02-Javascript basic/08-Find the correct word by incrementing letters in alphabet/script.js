// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// 2 functions
// function nextChar(char) {
//   return String.fromCharCode(char.charCodeAt(0) + 1);
// }
// function myFunction(string) {
//   var answer = "";
//   for (char of string) {
//     answer = answer + nextChar(char);
//   }
//   return answer;
// }

//1 function
function myFunction(string) {
  var answer = "";

  for (char of string) {
    answer = answer + String.fromCharCode(char.charCodeAt(0) + 1);
  }
  return answer;
}

console.log(myFunction("bnchmf")); //'coding'
console.log(myFunction("bgddrd")); //'cheese'
console.log(myFunction("sdrshmf")); //'testing'

//author's solution
console.log("author's solution");
function authorSolution(str) {
  const arr = [...str];
  const correctedArray = arr.map((e) =>
    String.fromCharCode(e.charCodeAt() + 1)
  );
  return correctedArray.join("");
}

console.log(authorSolution("bnchmf")); //'coding'
console.log(authorSolution("bgddrd")); //'cheese'
console.log(authorSolution("sdrshmf")); //'testing'
