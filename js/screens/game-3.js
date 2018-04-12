import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import {goToNextStep} from '../game/game-logic';
import createGameScreenMarkup from './game-screen';

const createTripleScreenFragment = (state) => {
  const HAS_ANSWERS = false;
  const GAME_CONTENT_MODIFIER = `game__content--triple`;

  const fragmentMarkup = createGameScreenMarkup(state, HAS_ANSWERS, GAME_CONTENT_MODIFIER);

  const tripleScreenFragment = createFragmentFromTemplate(fragmentMarkup);
  addDelegatedEventListener(`click`, `.game__content--triple .game__option`, () => goToNextStep(state));

  return tripleScreenFragment;
};

export default createTripleScreenFragment;
