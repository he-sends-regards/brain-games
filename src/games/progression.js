import builder from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const n1 = getRandomInt(1, 10);
  const a = getRandomInt(1, 10);
  const progressionLength = 10;
  const progression = [n1];
  let question = `${progression[0]}`;
  let i = 1;
  while (i < progressionLength) {
    progression[i] = progression[i - 1] + a;
    i += 1;
  }
  const missed = getRandomInt(0, 9);
  const correctAnswer = progression[missed];
  progression[missed] = '..';
  i = 1;
  while (i < progressionLength - 1) {
    question += ` ${progression[i].toString()}`;
    i += 1;
  }

  return [question, correctAnswer.toString()];
};

export default () => builder(description, generateGameData);
