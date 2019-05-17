import builder from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let prime = true;
  let i = 2;
  while (i <= 10) {
    if ((num % i === 0) || (num / i !== 1) || (num < 2)) prime = false;
    i += 1;
  }
  return prime;
};

const generateGameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');

  return [question, correctAnswer.toString()];
};

export default () => builder(description, generateGameData);
