import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const guide = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const playRound = () => {
  const num = getRandomNumber(1, 100);

  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = (`${num}`);

  return [question, correctAnswer];
};

export default () => {
  startGame(guide, playRound);
};
