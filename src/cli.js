import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const greet = () => {
  welcome();
  return getName();
};

const printWrongAnswMsg = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const printCorrectMsg = () => {
  console.log('Correct!');
};

const printEndGameMsg = (userName) => {
  console.log(`Congratulations, ${userName}!`);
}

const printQuestion = (value) => {
  console.log(`Question: ${value}`);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const printGameRules = (rules) => {
  for (let i = 0; i < rules.length; i += 1) {
    console.log(rules[i]);
  }
};


export {
  greet, printCorrectMsg, printEndGameMsg, getUserAnswer, printGameRules, printQuestion, printWrongAnswMsg
}
