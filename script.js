'use strict';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'no number 🤢';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'correct guess 🎇';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '20rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('input[type=number]').disabled = true;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high 🎈' : 'too low 🧨';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = 'you lost';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('input[type=number]').disabled = true;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('input[type=number]').disabled = false;
  document.querySelector('.number').style.width = '16rem';
  document.querySelector('.number').textContent = '?';
});
