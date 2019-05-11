import { getRandomInt, builder } from '..';

const rules = 'What is the result of the expression?';

const data = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operation = getRandomInt(0, 2);
  let question;
  let correctAnswer;

  if (operation === 0) {
    question = `${num1} + ${num2}`;
    correctAnswer = num1 + num2;
  } else if (operation === 1) {
    question = `${num1} - ${num2}`;
    correctAnswer = num1 - num2;
  } else if (operation === 2) {
    question = `${num1} * ${num2}`;
    correctAnswer = num1 * num2;
  }
  return [question, correctAnswer.toString()];
};

const game = () => builder(rules, data);

export default game;
