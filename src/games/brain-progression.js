import { getRandomInt, builder } from '..';

const rules = 'What number is missing in the progression?';

const data = () => {
  const n1 = getRandomInt(1, 10);
  let n2; let n3; let n4; let n5; let n6; let n7; let n8; let n9; let
    n10;
  const progression = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
  const a = getRandomInt(1, 10);
  let question = `${progression[0]}`;
  let i = 1;
  while (i < 10) {
    progression[i] = progression[i - 1] + a;
    console.log(progression[i]);
    i += 1;
  }
  const missed = getRandomInt(0, 9);
  const correctAnswer = progression[missed];
  progression[missed] = '..';
  i = 1;
  while (i < 9) {
    question += ` ${progression[i].toString()}`;
    i += 1;
  }

  return [question, correctAnswer.toString()];
};

const game = () => builder(rules, data);

export default game;
