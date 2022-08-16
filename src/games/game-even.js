import { checkOddOrEven, getRandomNumber } from '../utils.js';
import game from '../index.js';

const getGameData = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 1000;
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = checkOddOrEven(number) ? 'yes' : 'no';
  return [rule, number, correctAnswer];
};

const gameEven = () => game(getGameData);

export default gameEven;
