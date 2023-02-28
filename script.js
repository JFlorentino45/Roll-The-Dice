'use strict';

const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.querySelector('#score--1');
const current0Ele = document.querySelector('#current--0');
const current1Ele = document.querySelector('#current--1');
const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer;

const init = function () {
  current0Ele.textContent = 0;
  current1Ele.textContent = 0;
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  diceEle.classList.add('hidden');
  player0Ele.classList.remove('player--winner');
  player1Ele.classList.remove('player--winner');
  player0Ele.classList.add('player--active');
  player1Ele.classList.remove('player--active');
  document.querySelector('.btn--roll').style.visibility = 'visible';
  document.querySelector('.btn--hold').style.visibility = 'visible';
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Ele.classList.toggle('player--active');
  player1Ele.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceEle.classList.remove('hidden');
  diceEle.src = `./images/dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    diceEle.classList.add('hidden');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector('.btn--roll').style.visibility = 'hidden';
    document.querySelector('.btn--hold').style.visibility = 'hidden';
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
