import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, progressionStep, progressionLength) => {
  const progression = [];
  let temp = firstNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = temp + progressionStep;
    temp = nextNumber;
    progression.push(nextNumber);
  }
  return progression;
};

const startProgressionGame = () => {
  const progressionStep = getRandomNumber(1, 100);
  const firstNumber = getRandomNumber(1, 100);
  const progressionLength = 10;

  const hiddenNumber = getRandomNumber(0, progressionLength - 1);

  const correctProgression = getProgression(firstNumber, progressionStep, progressionLength);
  const correctAnswer = `${correctProgression[hiddenNumber]}`;

  const strProgression = correctProgression.join(' ');
  const question = strProgression.replace(correctAnswer, '..');

  return [question, correctAnswer];
};

export default () => {
  startGame(description, startProgressionGame);
};
