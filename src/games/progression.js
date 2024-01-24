import startGame from '../index.js';
import getRandomNumber from '../indexTast.js';

const guide = 'What number is missing in the progression?';

const getProgression = (firstNum, progressionStep, progressionLength) => {
  const progression = [];
  let temp = firstNum;
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNum = temp + progressionStep;
    temp = nextNum;
    progression.push(nextNum);
  }
  return progression;
};

const playRound = () => {
  const progressionStep = getRandomNumber(1, 100);
  const firstNum = getRandomNumber(1, 100);
  const progressionLength = 10;

  const hiddenNum = getRandomNumber(0, progressionLength - 1);

  const correctProgression = getProgression(firstNum, progressionStep, progressionLength);
  const correctAnswer = `${correctProgression[hiddenNum]}`;

  const strProgression = correctProgression.join(' ');
  const question = strProgression.replace(correctAnswer, '..');

  return [question, correctAnswer];
};

export default () => {
  startGame(guide, playRound);
};
