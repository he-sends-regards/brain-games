import builder from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let prime = true;
  const limitPrimeCheck = Math.sqrt(num);
  console.log(limitPrimeCheck);
  for (let i = 2; i <= limitPrimeCheck; i += 1) {
    if (num % i === 0) prime = false;
  }
  return prime;
};

const generateGameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');

  return [question, correctAnswer.toString()];
};

export default () => builder(description, generateGameData);
