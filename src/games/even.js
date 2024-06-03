import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  const number = getRandomNumber(1, 100);

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = (`${number}`);

  return [question, correctAnswer];
};

export default () => {
  startGame(description, startEvenGame);
};
