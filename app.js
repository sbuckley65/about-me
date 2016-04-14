var gameScore = 0;
var userName = prompt('Let\'s play a game. Please enter your name and click OK.');
console.log('User\'s name is ' + userName);

var questions = [', did I go to Iowa State University', ', is one of my goals to work with mobile devices? (Yes/No)', ', did I ever work as a lab tech? (Yes/No)', ', did I ever work at an insurance company? (Yes/No)', ', do I like to cook? (Yes/No)'];
var responses = ['YES', 'Y'];
var answers = ['Correct', 'Sorry, wrong.'];

function qCollege() {
  var college = prompt(userName + questions[0]).toUpperCase();
  if (college === responses[0] || college === responses[1]) {
    alert(answers[0]);
    console.log('User said Yes.');
    ++gameScore;
  } else {
    alert(answers[1]);
    console.log('User said No.');
  }
}

qCollege();

function qPhones() {
  var phones = prompt(userName + questions[1]).toUpperCase();
  if (phones === responses[0] || phones === responses[1]) {
    alert(answers[0]);
    console.log('User said Yes.');
    ++gameScore;
  } else {
    alert(answers[1]);
    console.log('User said No.');
  }
}
qPhones();

function qLab() {
  var lab = prompt(userName + questions[2]).toUpperCase();
  if (lab === responses[0] || lab === responses[1]) {
    alert(answers[0]);
    console.log('User said Yes.');
    ++gameScore;
  } else {
    alert(answers[1]);
    console.log('User said No.');
  }
}
qLab();

function qInsurance() {
  var insurance = prompt(userName + questions[3]).toUpperCase();
  if (insurance === responses[0] || insurance === responses[1]) {
    alert(answers[0]);
    console.log('User said Yes.');
    ++gameScore;
  } else {
    alert(answers[1]);
    console.log('User said No.');
  }
}
qInsurance();

function qCook() {
  var cook = prompt(userName + questions[4]).toUpperCase();
  if (cook === responses[0] || cook === responses[1]) {
    alert(answers[0]);
    console.log('User said Yes.');
    ++gameScore;
  } else {
    alert(answers[1]);
    console.log('User said No.');
  }
}
qCook();

function qCars() {
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
}

qCars();

function qPlaces() {
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
}

qPlaces();

alert('Your score is ' + gameScore + '.');
