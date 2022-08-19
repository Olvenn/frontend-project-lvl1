import getRandomNumber from '../utils.js';
import mainGameLogic from '../index.js';

const isPrimeNum = (num) => {
  for (let i = 2; i < num / 2 + 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const MIN_NUMBER = 3;
  const MAX_NUMBER = 50;
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isPrimeNum(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => mainGameLogic(getGameData, gameRule);
