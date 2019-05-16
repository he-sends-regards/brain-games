import builder from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const generateGameData = () => {
  const question = getRandomInt(1, 100);
  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export default () => builder(description, generateGameData);
