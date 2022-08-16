import { checkOddOrEven, getRandomNumber } from '../utils.js';
import game from '../index.js';

const getGameData = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = getRandomNumber(1, 1000);
  const correctAnswer = checkOddOrEven(number) ? 'yes' : 'no';
  return [rule, number, correctAnswer];
};

const gameEven = () => game(getGameData);

export default gameEven;
