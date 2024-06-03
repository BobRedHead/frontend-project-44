import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const description = 'What is the result of the expression?';

const calculateTheAnswer = (number1, questOperator, number2) => {
  switch (questOperator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operators!');
  }
};

const starCalcGame = () => {
  const operators = ['+', '-', '*'];
  const questOperator = operators[getRandomNumber(0, 2)];

  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const correctAnswer = String(calculateTheAnswer(number1, questOperator, number2));
  const question = (`${number1} ${questOperator} ${number2}`);
  return [question, correctAnswer];
};

export default () => {
  startGame(description, starCalcGame);
};
