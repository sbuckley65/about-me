var userName = prompt('Let\'s play a game. Please enter your name and click OK.');
console.log('User\'s name is ' + userName);

// var college = prompt(userName + ', did I go to Iowa State University? (Yes/No)').toUpperCase();
// if (college === 'YES' || college === 'Y') {
//   alert('Go Cyclones!!');
//   console.log('User said Yes.');
// } else {
//   alert('No, I\'m a Cyclone, darn it!');
//   console.log('User said No.');
// }
//
// var phones = prompt(userName + ', is one of my goals to work with mobile devices? (Yes/No)').toUpperCase();
// if (phones === 'YES' || phones === 'Y') {
//   alert('Thats right They are the future.');
//   console.log('User said Yes.');
// } else {
//   alert('Actually I really would like to work with them.');
//   console.log('User said No.');
// }
//
// var lab = prompt(userName + ', did I ever work as a lab tech? (Yes/No)').toUpperCase();
// if (lab === 'YES' || lab === 'Y') {
//   alert('Yes. You get extra knowledge. I worked with cockroaches!');
//   console.log('User said Yes.');
// } else {
//   alert('Sorry, but I acutally did work as a lab tech.');
//   console.log('User said No.');
// }
//
// var insurance = prompt(userName + ', did I ever work at an insurance company? (Yes/No)').toUpperCase();
// if (insurance === 'YES' || insurance === 'Y') {
//   alert('Correct.');
//   console.log('User said Yes.');
// } else {
//   alert('Sorry, that\'s wrong.');
//   console.log('User said No.');
// }
//
// var cook = prompt(userName + ', do I like to cook? (Yes/No)').toUpperCase();
// if (cook === 'YES' || cook === 'Y') {
//   alert('Correct.');
//   console.log('User said Yes.');
// } else {
//   alert('Sorry, that\'s wrong.');
//   console.log('User said No.');
// }

// var guess;
var cars = 5;
var guesses = 0;
var userWrong = true;
while (userWrong && guesses < 4) {
  var guess = prompt(userName + ', how many cars have I owned? Please enter a number.');
  console.log('User guessed' + guess);
  if (guess == cars) {
    alert('Correct.');
    userWrong = false;
  } else {
    alert('Incorrect.');
    ++guesses;
  }
}
// if (guess == 5) {
//   alert('That is correct!');
// } else {
//   while (i < 4) {
//     guess = prompt('That is the wrong answer. Please try again?');
//     i++;
//   }
// }
