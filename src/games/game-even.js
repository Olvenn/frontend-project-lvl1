import getRandomNumber from '../utils.js';
import mainGameLogic from '../index.js';

const isCheckOddOrEven = (number) => number % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 1000;
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isCheckOddOrEven(number) ? 'yes' : 'no';
  return [rule, number, correctAnswer];
};

const gameEven = () => mainGameLogic(getGameData);

export default gameEven;
