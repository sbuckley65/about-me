var userName = prompt('Let\'s play a game. Please enter your name and click OK.');
console.log('User\'s name is ' + userName);

var college = prompt(userName + ', did I go to Iowa State University? (Yes/No)').toUpperCase();
if (college === 'YES' || college === 'Y') {
  alert('Go Cyclones!!');
  console.log('User said Yes.');
} else {
  alert('No, I\'m a Cyclone, darn it!');
  console.log('User said No.');
}

var phones = prompt(userName + ', is one of my goals to work with mobile devices? (Yes/No)').toUpperCase();
if (phones === 'YES' || phones === 'Y') {
  alert('Thats right They are the future.');
  console.log('User said Yes.');
} else {
  alert('Actually I really would like to work with them.');
  console.log('User said No.');
}

var lab = prompt(userName + ', did I ever work as a lab tech? (Yes/No)').toUpperCase();
if (lab === 'YES' || lab === 'Y') {
  alert('Yes. You get extra knowledge. I worked with cockroaches!');
  console.log('User said Yes.');
} else {
  alert('Sorry, but I acutally did work as a lab tech.');
  console.log('User said No.');
}

var insurance = prompt(userName + ', did I ever work at an insurance company? (Yes/No)').toUpperCase();
if (insurance === 'YES' || insurance === 'Y') {
  alert('Correct.');
  console.log('User said Yes.');
} else {
  alert('Sorry, that\'s wrong.');
  console.log('User said No.');
}
