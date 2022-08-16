import { isPrimeNum, getRandomNumber } from '../utils.js';
import game from '../index.js';

const getGameData = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const number = getRandomNumber(1, 1000);
  const correctAnswer = isPrimeNum(number) ? 'yes' : 'no';
  return [rule, number, correctAnswer];
};

const brainPrime = () => game(getGameData);

export default brainPrime;
