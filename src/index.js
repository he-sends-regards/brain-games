import readlineSync from 'readline-sync';
import { game } from './games/brain-even';

export const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

export const builder = (rules, values) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let i = 0;
  while (i < 3) {
    game();
    console.log(`Question ${value}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}


const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;
