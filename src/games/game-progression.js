import getRandomNumber from '../utils.js';
import mainGameLogic from '../index.js';

const makeProgression = (length, step, firstNumber) => {
  const progressionFull = [firstNumber];
  const emptyIndex = getRandomNumber(0, length);

  for (let i = 0; i < length; i += 1) {
    progressionFull.push((progressionFull[progressionFull.length - 1]) + step);
  }
  const emptyNumber = progressionFull[emptyIndex];
  progressionFull[emptyIndex] = '..';
  const progression = progressionFull.join(' ');
  return [progression, emptyNumber];
};

const gameRule = 'What number is missing in the progression?';
const getGameData = () => {
  const PROGRESS_LENGTH = 10;
  const MIN_STEP = 2;
  const MAX_STEP = 5;
  const MIN_START = 3;
  const MAX_START = 6;
  const step = getRandomNumber(MIN_STEP, MAX_STEP);
  const startNumber = getRandomNumber(MIN_START, MAX_START);
  const [progression, correctAnswer] = makeProgression(PROGRESS_LENGTH, step, startNumber);
  return [progression, correctAnswer.toString()];
};

export default () => mainGameLogic(getGameData, gameRule);
