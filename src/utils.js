export const checkOddOrEven = (number) => number % 2 === 0;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const makeCalculation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'unknown operator';
  };
};

export const findDivisor = (a, b) => !b ? a : findDivisor(b, a % b);

