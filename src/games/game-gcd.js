import { getRandomNumber, findDivisor } from '../utils.js';
import game from '../index.js';

const getGameData = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const number = `${firstNumber} ${secondNumber}`;
  const correctAnswer = (findDivisor(firstNumber, secondNumber)).toString();

  return [rule, number, correctAnswer];
};

const gameGcd = () => game(getGameData);

export default gameGcd;
