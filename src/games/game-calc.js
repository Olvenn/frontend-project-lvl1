import { getRandomNumber, makeCalculation } from '../utils.js';
import game from '../index.js';

const getGameData = () => {
  const rule = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const number = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = makeCalculation(firstNumber, secondNumber, operator).toString();
  return [rule, number, correctAnswer];
};

const gameCalc = () => game(getGameData);

export default gameCalc;
