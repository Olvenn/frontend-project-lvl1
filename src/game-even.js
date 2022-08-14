import readlineSync from 'readline-sync';
import { checkOddOrEven, getRandomNumber } from  './utils.js';
import game from './index.js';

const getGameData = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = getRandomNumber(1, 100);
  const correctAnswer = checkOddOrEven(number) ? 'yes' : 'no';
    
  return [rule, number, correctAnswer];
};

const gameEven = (data) => { return game(getGameData)};

export default gameEven;
