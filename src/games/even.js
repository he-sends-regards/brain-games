import builder from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => num % 2 === 0;

const generateGameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => builder(description, generateGameData);
