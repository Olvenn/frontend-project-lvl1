import { getRandomNumber } from '../utils.js';
import game from './index.js';

const getGameData = () => {
  const rule = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];	
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(1, operators.length)];
  const correctAnswer = firstNumber operator secondNumber;
  
  return [rule, number, correctAnswer];
};

const gameCalc = () => game(getGameData);

export default gameCalc;

