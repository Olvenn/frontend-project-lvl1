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

export const makeProgression = (length, step, firstNumber) => {
  let progressionFull = [firstNumber];
  const emptyIndex = getRandomNumber(0, length);

  for (let i = 0; i < length; i += 1) {
    progressionFull.push((progressionFull[progressionFull.length - 1]) + step);
  }
  
  const emptyNumber = progressionFull[emptyIndex];
  progressionFull[emptyIndex] = '..';
  const progression = progressionFull.join(' ');
  
  return [progression, emptyNumber];
};

export const isPrimeNum = (num) => {
  for (let i = 2; i < num / 2; i += 1) {

  if (num % i === 0) {
      return false;
     }
   };

  return true;
};

