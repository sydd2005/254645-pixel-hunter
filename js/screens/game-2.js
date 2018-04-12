import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import {goToNextStep} from '../game/game-logic';
import createGameScreenMarkup from './game-screen';

const createSingleScreenFragment = (state) => {
  const HAS_ANSWERS = true;
  const GAME_CONTENT_MODIFIER = `game__content--wide`;

  const fragmentMarkup = createGameScreenMarkup(state, HAS_ANSWERS, GAME_CONTENT_MODIFIER);

  const singleScreenFragment = createFragmentFromTemplate(fragmentMarkup);
  addDelegatedEventListener(`click`, `.game__content--wide .game__answer`, () => goToNextStep(state));

  return singleScreenFragment;
};


export default createSingleScreenFragment;
