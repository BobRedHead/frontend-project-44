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

export {
  greet 
}
