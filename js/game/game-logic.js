import GAME_DATA from '../data/game-data';
import showScreen from '../show-screen';
import createStatsFragment from '../screens/stats';
import createSingleScreenFragment from '../screens/game-2';
import createDoubleScreenFragment from '../screens/game-1';
import createTripleScreenFragment from '../screens/game-3';
import CONFIG from './config';
import {QUESTION_TYPE} from './dicts';
import {cloneObject} from '../utils';

export const createInitialState = () => {
  const initialState = {
    currentStepIndex: 0,
    lives: CONFIG.MAX_LIVES,
    time: CONFIG.SECONDS_PER_QUESTION,
    steps: GAME_DATA.questions,
    stats: Array(CONFIG.GAMES_COUNT).fill(null),
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
      cloneObject(state),
      {
        currentStepIndex: getNextStepIndex(state),
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
  const newState = cloneObject(state);
  newState.stats[state.currentStepIndex] = answerResult;
  return newState;
};

export const changeLivesCount = (state, answerResult) => {
  const newState = cloneObject(state);
  if (!answerResult) {
    newState.lives = newState.lives - 1;
  }
  return newState;
};
