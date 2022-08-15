import readlineSync from 'readline-sync';

const game = (getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name ');
  console.log(`Hello, ${name}!`);
  const [rule] = getGameData();
  console.log(rule);

  const requestResponse = 'Your answer: ';
  const correct = 'Correct!';
  const numberOfMoves = 3;
  for (let i = 0; i < numberOfMoves; i += 1) {
    const [, questionData, correctAnswer] = getGameData();
    console.log(`Question: ${questionData}`);
    const answer = readlineSync.question(requestResponse);
    if (correctAnswer === answer) {
      console.log(correct);
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default game;
