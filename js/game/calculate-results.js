import {ANSWERS_POINTS_MAP, LIVES_POINTS} from './points';
import {ANSWER_TYPE} from './dicts';
import CONFIG from './config';

const FAST_TIME_LIMIT = 10;
const SLOW_TIME_LIMIT = 20;

export const getAnswerType = (answer) => {
  switch (true) {
    case !answer:
      return ANSWER_TYPE.UNKNOWN;
    case !answer.correct:
      return ANSWER_TYPE.WRONG;
    case answer.timeElapsed < FAST_TIME_LIMIT:
      return ANSWER_TYPE.FAST;
    case answer.timeElapsed > SLOW_TIME_LIMIT:
      return ANSWER_TYPE.SLOW;
    default:
      return ANSWER_TYPE.CORRECT;
  }
};

const calculatePoints = (answer) => ANSWERS_POINTS_MAP[getAnswerType(answer)];

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
