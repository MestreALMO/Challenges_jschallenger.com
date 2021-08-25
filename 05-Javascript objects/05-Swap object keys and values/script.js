// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  var answer = {};

  for (var key in obj) {
    answer[obj[key]] = key;
  }

  return answer;
}

console.log(
  myFunction({ bear: "animal", sow: "female", boar: "male", cub: "young" })
); // { animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }
console.log(
  myFunction({ sheep: "animal", ewe: "female", ram: "male", lamb: "young" })
); // { animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' }
console.log(myFunction({ Berlin: "city", Germany: "country" })); // { city: 'Berlin', country: 'Germany' }

// author's solution
function authorSolution(obj) {
  return Object.keys(obj).reduce((acc, cur) => {
    return { ...acc, [obj[cur]]: cur };
  }, {});
}
