import builder from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateGameData = () => {
  const firstElement = getRandomInt(1, 10);
  const progressionDifference = getRandomInt(1, 10);
  const progression = [];
  let question = `${progression[0]}`;
  let i = 0;
  while (i < progressionLength) {
    progression[i] = firstElement + progressionDifference * i;
    i += 1;
  }
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';
  question = progression.join(' ');

  return [question, correctAnswer.toString()];
};

export default () => builder(description, generateGameData);
