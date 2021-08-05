// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(number) {
  var array = [];
  const stringnumber = number.toString();

  for (char of stringnumber) {
    array.push(parseFloat(char));
  }
  return array;
}

console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));

// author's solution
// function myFunction( num ) {
//   const string = num + '';
//   const strings = string.split('');
//   return strings.map(digit => Number(digit))
// }
