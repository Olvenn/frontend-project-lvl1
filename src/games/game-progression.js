import { makeProgression, getRandomNumber } from '../utils.js';
import game from '../index.js';

const getGameData = () => {
  const rule = 'What number is missing in the progression?';
  const progressLength = 10;
  const step = getRandomNumber(2, 5);
  const startNumber = getRandomNumber(2, 5);
  const [progression, correctAnswer] = makeProgression(progressLength, step, startNumber);
  return [rule, progression, correctAnswer.toString()];
};
const gameProgression = () => game(getGameData);

export default gameProgression;
