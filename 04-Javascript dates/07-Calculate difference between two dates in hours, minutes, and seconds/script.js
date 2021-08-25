// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

function myFunction(date1, date2) {
  let difference = Math.abs(date1.getTime() - date2.getTime());
  let h = difference / (1000 * 60 * 60);

  let hrs = 0;
  let min = 0;
  let sec = 0;

  //hrs
  while (Math.floor(h) > 0) {
    hrs++;
    h--;
  }
  //min
  let HrsParaMin = h * 60;
  while (Math.floor(HrsParaMin) > 0) {
    min++;
    HrsParaMin--;
  }
  //sec
  let MinParaSeg = HrsParaMin * 60;
  sec = Math.ceil(MinParaSeg);

  return { hrs, min, sec };
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
); // { hrs: 0, min: 45, sec: 10 }
console.log(
  myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
); // { hrs: 1, min: 50, sec: 23 }
console.log(
  myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
); // { hrs: 3, min: 4, sec: 12 }

// author's solution
// my answer works, but the site did not validated it
// https://www.jschallenger.com/javascript-dates/difference-between-dates/challenge?id=5f082fa739c6fe165eb9f5a8
