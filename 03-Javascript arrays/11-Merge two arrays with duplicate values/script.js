// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(array1, array2) {
  const arrays = [...array1, ...array2];
  const arrayWithNoDuplicates = [...new Set(arrays)];
  const arrayAscendingOrder = arrayWithNoDuplicates.sort((a, b) => a - b);

  return arrayAscendingOrder;
}

console.log(myFunction([1, 2, 3], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //[ -11, -10, 5, 22, 41,  42, 333]

//author's solution
function authorSolution(first, second) {
  return [...new Set([...first, ...second])].sort((a, b) => a - b);
}
