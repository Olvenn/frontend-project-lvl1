import getRandomNumber from '../utils.js';
import mainGameLogic from '../index.js';

const makeCalculation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'unknown operator';
  }
};

const gameRule = 'What is the result of the expression?';
const getGameData = () => {
  const operators = ['+', '-', '*'];
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 10;
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const number = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = makeCalculation(firstNumber, secondNumber, operator).toString();
  return [number, correctAnswer];
};

export default () => mainGameLogic(getGameData, gameRule);
