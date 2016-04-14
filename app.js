var gameScore = 0;
var userName = prompt('Let\'s play a game. Please enter your name and click OK.');
console.log('User\'s name is ' + userName);

var college = prompt(userName + ', did I go to Iowa State University? (Yes/No)').toUpperCase();
if (college === 'YES' || college === 'Y') {
  alert('Go Cyclones!!');
  console.log('User said Yes.');
  ++gameScore;
} else {
  alert('No, I\'m a Cyclone, darn it!');
  console.log('User said No.');
  ++gameScore;
}

var phones = prompt(userName + ', is one of my goals to work with mobile devices? (Yes/No)').toUpperCase();
if (phones === 'YES' || phones === 'Y') {
  alert('Thats right. They are the future.');
  console.log('User said Yes.');
  ++gameScore;
} else {
  alert('Actually I really would like to work with them.');
  console.log('User said No.');
}

var lab = prompt(userName + ', did I ever work as a lab tech? (Yes/No)').toUpperCase();
if (lab === 'YES' || lab === 'Y') {
  alert('Yes. You get extra knowledge. I worked with cockroaches!');
  console.log('User said Yes.');
  ++gameScore;
} else {
  alert('Sorry, but I acutally did work as a lab tech.');
  console.log('User said No.');
}

var insurance = prompt(userName + ', did I ever work at an insurance company? (Yes/No)').toUpperCase();
if (insurance === 'YES' || insurance === 'Y') {
  alert('Correct.');
  console.log('User said Yes.');
  ++gameScore;
} else {
  alert('Sorry, that\'s wrong.');
  console.log('User said No.');
}

var cook = prompt(userName + ', do I like to cook? (Yes/No)').toUpperCase();
if (cook === 'YES' || cook === 'Y') {
  alert('Correct.');
  console.log('User said Yes.');
  ++gameScore;
} else {
  alert('Sorry, that\'s wrong.');
  console.log('User said No.');
}

var cars = 5;
var guesses = 0;
var userWrong = true;
var guess;
while (userWrong && guesses < 4) {
  guess = prompt(userName + ', how many cars have I owned? Please enter a number.');
  ++guesses;
  console.log('User guessed' + guess);
  if (guess == cars) {
    alert('Correct.');
    console.log('User guessed correct.');
    userWrong = false;
    ++gameScore;
  }
  if (guess > cars) {
    alert('Sorry, ' + userName + 'that\'s too high. Try again.');
    console.log('Guessed too high.');
  }
  if (guess < cars ){
    alert('Sorry, ' + userName + 'that\'s too low. Try again.');
    console.log('Guessed too low.');
  }
}
if (userWrong) {
  alert('Sorry, you tried too many times. Click OK to continue with the game.');
}

var places = ['Iowa', 'Nebraska'];
var pGuesses = 0;
var userPwrong = true;
var pGuess;
while (userPwrong && pGuesses < 6) {
  pGuess = prompt(userName + ', how many states in the USA have I lived in? Please enter a state name.');
  ++pGuesses;
  console.log('User guessed' + pGuess);
  for (var i = 0; i < places.length; i++) {
    if (pGuess === places[i]) {
      userPwrong = false;
    }
  }
}
if (userPwrong) {
  alert('Sorry, you tried too many times. This was the last question. Click OK to find out your score. BTW I lived in Iowa and Nebraska.');
  console.log('User had too many guesses.');
} else {
  alert('You got one correct. All total I lived in Iowa and Nebraska before moving to Washington. This is the end of the game. Click OK to find your score.');
  console.log('User guessed correct.');
  ++gameScore;
}

alert('Your score is ' + gameScore + '.');
