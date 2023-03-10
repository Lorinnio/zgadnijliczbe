'use strict';

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const bodyBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
let secretNumber = randomNumber();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // kiedy nie ma liczby
  if (!guess) {
    // document.querySelector('.message').textContent = 'βοΈ Brak liczby!';
    displayMessage('βοΈ Brak liczby!');
  }
  // kiedy wygrwa
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Brawo! π';
    displayMessage('Brawo! π');
    bodyBackground('#40c057');
    numberWidth('30rem');
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // kiedy ΕΊle
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'π Za wysoko!' : 'π Za nisko!';
      displayMessage(guess > secretNumber ? 'π Za wysoko!' : 'π Za nisko!');
      score--;
      displayScore(score);
    } else {
      displayMessage('π₯ Przegrales');
      displayScore(0);
      bodyBackground('#e03131');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  displayMessage('Zacznij zgadywac...');
  bodyBackground('');
  numberWidth('');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
});
