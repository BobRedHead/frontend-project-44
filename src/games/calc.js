import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const guide = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateTheAnswer = (num1, randOperator, num2) => {
  switch (randOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operators!');
  }
};

const playRound = () => {
  const randOperator = operators[getRandomNumber(0, 2)];

  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const correctAnswer = String(calculateTheAnswer(num1, randOperator, num2));
  const question = (`${num1} ${randOperator} ${num2}`);
  return [question, correctAnswer];
};

export default () => {
  startGame(guide, playRound);
};