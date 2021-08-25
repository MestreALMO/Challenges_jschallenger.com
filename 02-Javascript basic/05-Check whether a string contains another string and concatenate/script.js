// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a;
}

console.log(myFunction("cheese", "cake"));
console.log(myFunction("lips", "s"));
