#!/usr/bin/env node

import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
  let i = 0;
  while (i < 3) {
    const num = getRandomInt(1, 100);
    console.log(`Question: ${num}`);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
brainEven();
