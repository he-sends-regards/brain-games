import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

export const builder = (rules, data) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = () => {
    let i = 0;
    while (i < 3) {
      const dataValue = data();
      const question = dataValue[0];
      const correctAnswer = dataValue[1];
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');

      if (answer === correctAnswer) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
        return null;
      }
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  iter();
};
