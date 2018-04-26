import CONFIG from './config';

export const createInitialState = (data) => {
  const initialState = {
    currentStepIndex: 0,
    lives: CONFIG.MAX_LIVES,
    time: CONFIG.SECONDS_PER_QUESTION,
    steps: data.questions,
    stats: Array(CONFIG.GAMES_COUNT).fill(null),
  };

  return initialState;
};
