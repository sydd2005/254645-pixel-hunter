import {QUESTION_TYPE} from '../data/game-data';
import createSingleScreenFragment from '../screens/game-2';
import createDoubleScreenFragment from '../screens/game-1';
import createTripleScreenFragment from '../screens/game-3';

export const QUESTION_SCREEN_MAP = {
  [QUESTION_TYPE.SINGLE]: createSingleScreenFragment,
  [QUESTION_TYPE.DOUBLE]: createDoubleScreenFragment,
  [QUESTION_TYPE.TRIPLE]: createTripleScreenFragment,
};
