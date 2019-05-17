import builder from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const generateGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return [question, correctAnswer.toString()];
};

export default () => builder(description, generateGameData);
