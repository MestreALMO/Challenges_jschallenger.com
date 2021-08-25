// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

function myFunction(object) {
  delete object.country;

  return object;
}

console.log(
  myFunction({ continent: "Asia", country: "Japan", region: "Kansai" })
); // { continent: 'Asia', region: 'Kansai' }
console.log(
  myFunction({ country: "Sweden", continent: "Europe", planet: "Earth" })
); // { continent: 'Europe', planet: 'Earth' }
console.log(
  myFunction({
    city: "Sacramento",
    state: "California",
    country: "USA",
    continent: "North America",
  })
); // { city: 'Sacramento', state: 'California', continent: 'North America' }

// author's solution
function authorSolution(obj) {
  const { country, ...rest } = obj;
  return rest;
}
