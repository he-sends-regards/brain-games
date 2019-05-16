import { getRandomInt, builder } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const data = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } return gcd(b, a % b);
  };
  const correctAnswer = gcd(num1, num2);

  return [question, correctAnswer.toString()];
};

const game = () => builder(rules, data);

export default game;
