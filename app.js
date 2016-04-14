var gameScore = 0;
console.log('User\'s name is ' + userName);
var userName = prompt('Let\'s play a game. Please enter your name and click OK.');
// Arrays to automate first five questions.
var questions = [', did I go to Iowa State University', ', is one of my goals to work with mobile devices? (Yes/No)', ', did I ever work as a lab tech? (Yes/No)', ', did I ever work at an insurance company? (Yes/No)', ', do I like to cook? (Yes/No)'];
var responses = ['YES', 'Y'];
var answers = ['Correct', 'Sorry, wrong.'];

function fiveQuestions() { //Function to do 5 questions automatically.
  for (var i = 0; i < questions.length; i++) {
    var quizz = prompt(userName + ' ' + questions[i]).toUpperCase();
    if (quizz === responses[0] || quizz === responses[1]) {
      console.log('User said ' + responses[0]);
      alert(answers[0]);
      ++gameScore;
    } else {
      console.log('User said ' + responses[1]);
      alert(answers[1]);
    }
  }
}
fiveQuestions();

// function qCollege() {
//   var college = prompt(userName + questions[0]).toUpperCase();
//   if (college === responses[0] || college === responses[1]) {
//     alert(answers[0]);
//     console.log('User said Yes.');
//     ++gameScore;
//   } else {
//     alert(answers[1]);
//     console.log('User said No.');
//   }
// }
//
// qCollege();
//
// function qPhones() {
//   var phones = prompt(userName + questions[1]).toUpperCase();
//   if (phones === responses[0] || phones === responses[1]) {
//     alert(answers[0]);
//     console.log('User said Yes.');
//     ++gameScore;
//   } else {
//     alert(answers[1]);
//     console.log('User said No.');
//   }
// }
// qPhones();
//
// function qLab() {
//   var lab = prompt(userName + questions[2]).toUpperCase();
//   if (lab === responses[0] || lab === responses[1]) {
//     alert(answers[0]);
//     console.log('User said Yes.');
//     ++gameScore;
//   } else {
//     alert(answers[1]);
//     console.log('User said No.');
//   }
// }
// qLab();
//
// function qInsurance() {
//   var insurance = prompt(userName + questions[3]).toUpperCase();
//   if (insurance === responses[0] || insurance === responses[1]) {
//     alert(answers[0]);
//     console.log('User said Yes.');
//     ++gameScore;
//   } else {
//     alert(answers[1]);
//     console.log('User said No.');
//   }
// }
// qInsurance();
//
// function qCook() {
//   var cook = prompt(userName + questions[4]).toUpperCase();
//   if (cook === responses[0] || cook === responses[1]) {
//     alert(answers[0]);
//     console.log('User said Yes.');
//     ++gameScore;
//   } else {
//     alert(answers[1]);
//     console.log('User said No.');
//   }
// }
// qCook();

function qCars() {
  var cars = 5;
  var guesses = 0;
  var userWrong = true;
  var guess;
  while (userWrong && guesses < 4) {
    console.log('User guessed' + guess);
    guess = prompt(userName + ', how many cars have I owned? Please enter a number.');
    ++guesses;
    if (guess == cars) {
      console.log('User guessed correct.');
      alert('Correct.');
      userWrong = false;
      ++gameScore;
    }
    if (guess > cars) {
      console.log('Guessed too high.');
      alert('Sorry, ' + userName + 'that\'s too high. Try again.');
    }
    if (guess < cars ){
      console.log('Guessed too low.');
      alert('Sorry, ' + userName + 'that\'s too low. Try again.');
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
    console.log('User guessed' + pGuess);
    pGuess = prompt(userName + ', how many states in the USA have I lived in? Please enter a state name.');
    ++pGuesses;
    for (var i = 0; i < places.length; i++) {
      if (pGuess === places[i]) {
        userPwrong = false;
      }
    }
  }
  if (userPwrong) {
    console.log('User had too many guesses.');
    alert('Sorry, you tried too many times. This was the last question. Click OK to find out your score. BTW I lived in Iowa and Nebraska.');
  } else {
    console.log('User guessed correct.');
    alert('You got one correct. All total I lived in Iowa and Nebraska before moving to Washington. This is the end of the game. Click OK to find your score.');
    ++gameScore;
  }
}

qPlaces();

alert('Your score is ' + gameScore + '.');
