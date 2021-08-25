// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(object) {
  var answer = {};

  for (var key in object) {
    object[key] === "" || object[key] === " "
      ? (answer[key] = null)
      : (answer[key] = object[key]);
  }

  return answer;
}

console.log(myFunction({ a: "a", b: "b", c: "" })); // { a: 'a', b: 'b', c: null }
console.log(myFunction({ a: "", b: "b", c: " ", d: "d" })); // { a: null, b: 'b', c: null, d: 'd' }
console.log(myFunction({ a: "a", b: "b ", c: " ", d: "" })); // { a: 'a', b: 'b ', c: null, d: null }

// author's solution
// the site didn't accepted my solution
