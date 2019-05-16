import { getRandomInt, builder } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no"';

const data = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = num => (num % 2 === 0 ? 'yes' : 'no');
  const correct = correctAnswer(question);
  return [question, correct];
};

const game = () => builder(rules, data);

export default game;
