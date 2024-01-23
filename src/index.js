import readlineSync from 'readline-sync';
import welcomeToTheBrainGames from './cli.js';

const gameInit = (gameTutorial, gameLogic) => {
  const yourName = welcomeToTheBrainGames();
  console.log(gameTutorial);

  let i = 0;
  const gameRoundCount = 3;

  while (i < gameRoundCount) {
    const [roundQuestion, roundRealAnswer] = gameLogic();
    console.log(`Question: ${roundQuestion}`);
    const roundAnswer = readlineSync.question('Your answer: ');
    if (roundAnswer === roundRealAnswer.toString()) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${roundAnswer}' is wrong answer ;(. Correct answer was '${roundRealAnswer}'.`);
      console.log(`Let's try again, ${yourName}!`);
      break;
    }
  }
  if (i === gameRoundCount) {
    console.log(`Congratulations, ${yourName}!`);
  }
};

export default gameInit;