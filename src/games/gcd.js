import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const guide = 'Find the greatest common divisor of given numbers.';

const gameGcd = (num1, num2) => {
  let result = 0;
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
    result = a + b;
  }
  return result;
};

const playRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const correctAnswer = String(gameGcd(num1, num2));
  const question = (`${num1} ${num2}`);
  return [question, correctAnswer];
};

export default () => {
  startGame(guide, playRound);
};
