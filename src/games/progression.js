import builder from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateGameData = () => {
  const firstElement = getRandomInt(1, 10);
  const progressionDifference = getRandomInt(1, 10);
  const progression = [];
  let question = `${progression[0]}`;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstElement + progressionDifference * i;
  }
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';
  question = progression.join(' ');

  return [question, correctAnswer.toString()];
};

export default () => builder(description, generateGameData);
