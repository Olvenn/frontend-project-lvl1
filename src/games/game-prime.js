import { isPrimeNum, getRandomNumber } from '../utils.js';
import game from '../index.js';

const getGameData = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const MIN_NUMBER = 3;
  const MAX_NUMBER = 250;
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isPrimeNum(number) ? 'yes' : 'no';
  return [rule, number, correctAnswer];
};

const gamePrime = () => game(getGameData);

export default gamePrime;
