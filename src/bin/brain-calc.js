#!/usr/bin/env node

import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

  const randTask = (num1, num2) => {
    const sum = (num1, num2) => {
      console.log('+');
      return num1 + num2;
    }
    const diff = (num1, num2) => {
      console.log('-');
      return num1 + num2;
    }
    const multi = (num1, num2) => {
      console.log('*');
      return num1 * num2;
    }
    const operationsArr = [
      sum(num1, num2),
      diff(num1, num2),
      multi(num1, num2)
    ];
    return operationsArr[getRandomInt(0, 2)];
  }
  let i = 0;
  while (i < 3) {
    const num1 = getRandomInt(0, 100);
    const num2 = getRandomInt(0, 100);
    console.log(`Question: ${randTask(num1, num2)}`);
    i += 1;
  }
}
brainCalc();
