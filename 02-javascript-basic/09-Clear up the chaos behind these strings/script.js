// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
  const aLettersOnly = a.replace(/\W/gi, "");
  const bLettersOnly = b.replace(/\W/gi, "");

  const aLOUpperCased =
    aLettersOnly.charAt(0).toUpperCase() + aLettersOnly.slice(1);

  const bLOBackwards = bLettersOnly.split("").reverse().join("");

  const answer = aLOUpperCased + bLOBackwards;

  return answer;
}

console.log(myFunction("java", "tpi%rcs")); //'Javascript'
console.log(myFunction("c%ountry", "edis")); //'Countryside'
console.log(myFunction("down", "nw%ot")); //'Downtown'

//author's solution
function authorSolution(a, b) {
  const first = a
    .split("")
    .map((part) => part.replace("%", ""))
    .join("");
  const second = b
    .split("")
    .reverse()
    .map((part) => part.replace("%", ""))
    .join("");
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}
