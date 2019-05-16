import builder from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';

const generateGameData = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operation = getRandomInt(0, 3);
  let question;
  let correctAnswer;

  switch (operation) {
    case 0:
      question = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case 1:
      question = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    default:
      question = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
  }
  return [question, correctAnswer.toString()];
};

export default () => builder(description, generateGameData);
