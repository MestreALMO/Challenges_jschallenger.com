// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

function myFunction(object1, object2) {
  var city = object2.country;
  delete object2.country;
  object2 = { ...object2, city: city };

  var answer = { ...object1, ...object2 };

  return answer;
}

console.log(
  myFunction(
    { continent: "Europe", country: "Germany" },
    { planet: "Earth", country: "Munich", state: "Bavaria" }
  )
); // { continent: 'Europe', country: 'Germany', planet: 'Earth', state: 'Bavaria', city: 'Munich'}
console.log(
  myFunction(
    { continent: "North America", country: "USA" },
    { planet: "Earth", country: "Los Angeles", state: "California" }
  )
); // { continent: 'North America', country: 'USA', planet: 'Earth', state: 'California', city: 'Los Angeles'}

// author's solution
function authorSolution(first, second) {
  const { country, ...rest } = second;
  return { ...first, ...rest, city: country };
}
