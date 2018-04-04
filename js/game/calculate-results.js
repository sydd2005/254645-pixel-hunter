import {ANSWERS_POINTS_MAP, LIVES_POINTS, ANSWER_TYPE} from './points';
import CONFIG from './config';

const FAST_TIME_LIMIT = 10;
const SLOW_TIME_LIMIT = 20;

const calculatePoints = (answer) => {
  if (!answer.correct) {
    return ANSWERS_POINTS_MAP[ANSWER_TYPE.WRONG];
  }
  switch (true) {
    case answer.timeElapsed < FAST_TIME_LIMIT:
      return ANSWERS_POINTS_MAP[ANSWER_TYPE.FAST];
    case answer.timeElapsed > SLOW_TIME_LIMIT:
      return ANSWERS_POINTS_MAP[ANSWER_TYPE.SLOW];
    default:
      return ANSWERS_POINTS_MAP[ANSWER_TYPE.CORRECT];
  }
};

const calculateResults = (answers, remainingLives) => {
  if (answers.length < CONFIG.GAMES_COUNT) {
    return -1;
  }

  const answersPoints = answers.reduce((acc, answer) => {
    return acc + calculatePoints(answer);
  }, 0);

  const livesPoints = remainingLives * LIVES_POINTS;

  return answersPoints + livesPoints;
};

export default calculateResults;
