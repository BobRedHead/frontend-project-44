#!/usr/bin/env node

import gameInit from '../../src/index.js';
import getRandomNumber from '../../src/math.js';

const gameTutorial = ('Answer "yes" if the number is even, otherwise answer "no".');

const gameLogic = () => {
  const maxNumber = 100;
  const roundQuestion = getRandomNumber(maxNumber);
  const roundRealAnswer = roundQuestion % 2 === 0 ? 'yes' : 'no';
  return [roundQuestion, roundRealAnswer];
};

gameInit(gameTutorial, gameLogic);