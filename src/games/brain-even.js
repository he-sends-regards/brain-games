import { getRandomInt, builder} from '..';

const rules = 'Answer "yes" if number even otherwise answer "no"';

export const data = () => {
  const value = getRandomInt(1, 100);
  const correctAnswer = value % 2 === 0 ? 'yes' : 'no';
  return [value, correctAnswer];
};

const game = () => builder(rules, data);

export default game;
