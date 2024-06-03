import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const description = 'Find the greatest common divisor of given numbers.';

const gameGcd = (number1, number2) => {
  let result = 0;
  let a = number1;
  let b = number2;

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

const startGcdGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const correctAnswer = String(gameGcd(number1, number2));
  const question = (`${number1} ${number2}`);
  return [question, correctAnswer];
};

export default () => {
  startGame(description, startGcdGame);
};
