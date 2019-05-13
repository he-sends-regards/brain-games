import { getRandomInt, builder } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const data = () => {
  const question = getRandomInt(1, 100);
  let correctAnswer = 'yes';
  let i = 2;
  while (i <= 10) {
    if (question % i === 0) correctAnswer = 'no';
    i += 1;
  }

  return [question, correctAnswer.toString()];
};

const game = () => builder(rules, data);

export default game;
