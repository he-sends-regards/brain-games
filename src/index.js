import readlineSync from 'readline-sync';

const builder = (rules, data) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const dataValue = data();
    const [question, correctAnswer] = [dataValue[0], dataValue[1]];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return (
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`),
        console.log(`Let's try again, ${userName}!`)
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default builder;
