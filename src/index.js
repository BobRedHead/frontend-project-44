import {
    greet, getUserAnswer, printGameRules, printQuestion, printCorrectMsg, printEndGameMsg, printWrongAnswMsg
} from './cli.js';
import { interpolate } from './utils.js';

import evenGame from './games/even.js';
import calcGame from './games/calc.js';

const gameGuidelines = {
    even: ['Answer "yes" if the number is even, otherwise answer "no".'],
};

const playRound = (game) => {
    const [task, correctAnswer] = game().map((el) => interpolate(el));
    printQuestion(task);
    const userAnswer = getUserAnswer();
    return [userAnswer, correctAnswer, (correctAnswer === interpolate(userAnswer))];
  };
  
  const play = (game, guide = '') => {
    let roundResult = false;
    let userAnswer = '';
    let correctAnswer = 0;
    let score = 0;
    const rounds = 3;
    const userName = greet();
    printGameRules(guide);
    for (let cur = 0; cur < rounds; cur += 1) {
      [userAnswer, correctAnswer, roundResult] = playRound(game);
      if (roundResult === true) {
        score += 1;
        printCorrectMsg();
      } else {
        printWrongAnswMsg(userName, userAnswer, correctAnswer);
        score = 0;
        break;
      }
    }
    if (score === rounds) {
      printEndGameMsg(userName);
    }
  };

const pickingGame = (game, guide) => () => play(game, guide);
const playEven = pickingGame(evenGame, gameGuide.evem);
const playCalc = selectGame(calcGame, gameRules.calc);

export {
    playEven, playCalc 
}