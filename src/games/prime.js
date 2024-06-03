import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const sqrt = Math.sqrt(number);

  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startPrimeGame = () => {
  const number = getRandomNumber(1, 100);

  const question = (`${number}`);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  startGame(description, startPrimeGame);
};
