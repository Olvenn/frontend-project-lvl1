import getRandomNumber from '../utils.js';
import mainGameLogic from '../index.js';

const PROGRESS_LENGTH = 10;
const MIN_STEP = 2;
const MAX_STEP = 5;
const MIN_START = 3;
const MAX_START = 6;
const stepper = getRandomNumber(MIN_STEP, MAX_STEP);
const startNumber = getRandomNumber(MIN_START, MAX_START);
const rawProgression = (length, step, firstNumber) => {
  const progressionFull = [firstNumber];
  for (let i = 0; i < length; i += 1) {
    progressionFull.push((progressionFull[progressionFull.length - 1]) + step);
  }
  return progressionFull;
};
const getProgressionAndNumber = (makeProgression) => {
  let progression = makeProgression;
  const emptyIndex = getRandomNumber(0, makeProgression.length - 1);
  const emptyNumber = makeProgression[emptyIndex];
  progression[emptyIndex] = '..';
  progression = progression.join(' ');
  return [progression, emptyNumber];
};
const gameRule = 'What number is missing in the progression?';
const getGameData = () => {
  const progressionFull = rawProgression(PROGRESS_LENGTH, stepper, startNumber);
  const [progression, correctAnswer] = getProgressionAndNumber(progressionFull);
  return [progression, correctAnswer.toString()];
};

export default () => mainGameLogic(getGameData, gameRule);
