import GAME_DATA from '../data/game-data';
import showScreen from '../show-screen';
import createStatsFragment from '../screens/stats';
import {QUESTION_SCREEN_MAP} from './dicts';

export const INITIAL_STATE = {
  currentStepIndex: 0,
  lives: 3,
  time: 30,
  steps: GAME_DATA.questions,
  stats: [],
};

const getNextStepIndex = (state) => {
  let nextStepIndex = state.currentStepIndex + 1;
  const lastStepIndex = state.steps.length - 1;
  nextStepIndex = nextStepIndex < lastStepIndex ? nextStepIndex : lastStepIndex;
  return nextStepIndex;
};

const createNextStepState = (state) => {
  return Object.assign({}, state, {currentStepIndex: getNextStepIndex(state)});
};

export const createStepFragment = (state) => {
  const stepType = state.steps[state.currentStepIndex].type;
  return QUESTION_SCREEN_MAP[stepType](state);
};

export const goToNextStep = (state) => {
  const nextStepState = createNextStepState(state);
  const nextStepFragment = nextStepState.currentStepIndex !== state.currentStepIndex
    ? createStepFragment(nextStepState)
    : createStatsFragment(nextStepState);
  showScreen(nextStepFragment);
};
