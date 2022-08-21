import getRandomNumber from '../utils.js';
import mainGameLogic from '../index.js';

const isEven = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 1000;
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => mainGameLogic(getGameData, gameRule);
