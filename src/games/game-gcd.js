import getRandomNumber from '../utils.js';
import mainGameLogic from '../index.js';

const findDivisor = (a, b) => (!b ? a : findDivisor(b, a % b));

const gameRule = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 10;
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const number = `${firstNumber} ${secondNumber}`;
  const correctAnswer = (findDivisor(firstNumber, secondNumber)).toString();

  return [number, correctAnswer];
};

export default () => mainGameLogic(getGameData, gameRule);
