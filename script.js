'use strict';

const score0Ele = document.querySelector('#score--0');
const score1Ele = document.querySelector('#score--1');
const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceEle.classList.remove('hidden');
  diceEle.src = `./images/dice-${diceNumber}.png`;
});
