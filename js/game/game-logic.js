import GAME_DATA from '../data/game-data';
import showScreen from '../show-screen';
import createStatsFragment from '../screens/stats';
import {QUESTION_TYPE} from '../data/game-data';
import createSingleScreenFragment from '../screens/game-2';
import createDoubleScreenFragment from '../screens/game-1';
import createTripleScreenFragment from '../screens/game-3';
import CONFIG from './config';
import {getAnswerType} from './calculate-results';
import {ANSWER_TYPE} from './dicts';

export const createInitialState = () => {
  const initialState = {
    currentStepIndex: 0,
    lives: CONFIG.MAX_LIVES,
    time: CONFIG.SECONDS_PER_QUESTION,
    steps: GAME_DATA.questions,
    stats: Array(CONFIG.GAMES_COUNT).fill(null),
    // get lives() {
    //   const wrongAnswers = this.stats.filter((answer) => getAnswerType(answer) === ANSWER_TYPE.WRONG);
    //   return CONFIG.MAX_LIVES - wrongAnswers.length;
    // },
  };

  return initialState;
};

export const QUESTION_SCREEN_MAP = {
  [QUESTION_TYPE.SINGLE]: createSingleScreenFragment,
  [QUESTION_TYPE.DOUBLE]: createDoubleScreenFragment,
  [QUESTION_TYPE.TRIPLE]: createTripleScreenFragment,
};

const getNextStepIndex = (state) => {
  let nextStepIndex = state.currentStepIndex + 1;
  const lastStepIndex = state.steps.length - 1;
  nextStepIndex = nextStepIndex < lastStepIndex ? nextStepIndex : lastStepIndex;
  return nextStepIndex;
};

const createNextStepState = (state) => {
  return Object.assign(
      {},
      state,
      {
        currentStepIndex: getNextStepIndex(state),
        stats: state.stats.slice()
      }
  );
};

export const createStepFragment = (state) => {
  const stepType = state.steps[state.currentStepIndex].type;
  return QUESTION_SCREEN_MAP[stepType](state);
};

export const goToNextStep = (state) => {
  const nextStepState = createNextStepState(state);
  const isLastStep = nextStepState.currentStepIndex === state.currentStepIndex;
  const gameIsOver = state.lives < 0;
  const nextStepFragment = gameIsOver || isLastStep
    ? createStatsFragment(nextStepState)
    : createStepFragment(nextStepState);
  showScreen(nextStepFragment);
};

export const saveAnswerResult = (state, answerResult) => {
  const newState = Object.assign({}, state);
  newState.stats[state.currentStepIndex] = answerResult;
  return newState;
};

export const changeLivesCount = (state, answerResult) => {
  const newState = Object.assign({}, state);
  if (!answerResult) {
    newState.lives = newState.lives - 1;
  }
  return newState;
};
