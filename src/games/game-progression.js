import { makeProgression, getRandomNumber } from '../utils.js';
import mainGameLogic from '../index.js';

const getGameData = () => {
  const rule = 'What number is missing in the progression?';
  const PROGRESS_LENGTH = 10;
  const MIN_STEP = 2;
  const MAX_STEP = 5;
  const MIN_START = 3;
  const MAX_START = 6;
  const step = getRandomNumber(MIN_STEP, MAX_STEP);
  const startNumber = getRandomNumber(MIN_START, MAX_START);
  const [progression, correctAnswer] = makeProgression(PROGRESS_LENGTH, step, startNumber);
  return [rule, progression, correctAnswer.toString()];
};
const gameProgression = () => mainGameLogic(getGameData);

export default gameProgression;
