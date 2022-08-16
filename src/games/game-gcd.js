import { getRandomNumber, findDivisor } from '../utils.js';
import game from '../index.js';

const getGameData = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 10;
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const number = `${firstNumber} ${secondNumber}`;
  const correctAnswer = (findDivisor(firstNumber, secondNumber)).toString();

  return [rule, number, correctAnswer];
};

const gameGcd = () => game(getGameData);

export default gameGcd;
