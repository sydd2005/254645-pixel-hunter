import {QUESTION_TYPE} from '../data/game-data';
import GAME_DATA from '../data/game-data';
import showScreen from '../show-screen';
import generateSingleScreen from '../screens/game-2';
import generateDoubleScreen from '../screens/game-1';
import generateTripleScreen from '../screens/game-3';
import generateStatsFragment from '../screens/stats';

export const INITIAL_STATE = {
  currentStepIndex: 0,
  lives: 3,
  time: 30,
  steps: GAME_DATA.questions,
  stats: [],
};

const SCREEN_GENERATOR_MAP = {
  [QUESTION_TYPE.SINGLE]: generateSingleScreen,
  [QUESTION_TYPE.DOUBLE]: generateDoubleScreen,
  [QUESTION_TYPE.TRIPLE]: generateTripleScreen,
};

const getNextStepIndex = (state) => {
  let nextStepIndex = state.currentStepIndex + 1;
  const lastStepIndex = state.steps.length - 1;
  nextStepIndex = nextStepIndex < lastStepIndex ? nextStepIndex : lastStepIndex;
  return nextStepIndex;
};

const createNextStepState = (state) => {
  return Object.assign({}, state, {
    'currentStepIndex': getNextStepIndex(state)
  });
};

export const generateStepFragment = (state) => {
  const stepType = state.steps[state.currentStepIndex].type;
  return SCREEN_GENERATOR_MAP[stepType](state);
};

export const goToNextStep = (state) => {
  const nextStepState = createNextStepState(state);
  const nextStepFragment = nextStepState.currentStepIndex !== state.currentStepIndex
    ? generateStepFragment(nextStepState)
    : generateStatsFragment(nextStepState);
  showScreen(nextStepFragment);
};
