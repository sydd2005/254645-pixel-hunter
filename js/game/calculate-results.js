import {ANSWERS_POINTS_MAP, LIVES_POINTS} from './points';
import CONFIG from './config';

const calculateResults = (answers, remainingLives) => {
  if (answers.length < CONFIG.GAMES_COUNT) {
    return -1;
  }

  const answersPoints = answers.reduce((acc, answer) => {
    acc += ANSWERS_POINTS_MAP[answer.type];
  }, 0);

  const livesPoints = remainingLives * LIVES_POINTS;

  return answersPoints + livesPoints;
};

export default calculateResults;
