import GAME_DATA from '../data/game-data';
import CONFIG from './config';

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
