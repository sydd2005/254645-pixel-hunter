import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import {goToNextStep} from '../game/game-logic';
import createGameScreenMarkup from './game-screen';

const createDoubleScreenFragment = (state) => {
  const HAS_ANSWERS = true;

  const fragmentMarkup = createGameScreenMarkup(state, HAS_ANSWERS);

  const doubleScreenFragment = createFragmentFromTemplate(fragmentMarkup);

  addDelegatedEventListener(`change`, `.game__content`, () => {
    const question1Checked = document.querySelector(`.game__content [name=question1]:checked`) !== null;
    const question2Checked = document.querySelector(`.game__content [name=question2]:checked`) !== null;
    if (question1Checked && question2Checked) {
      goToNextStep(state);
    }
  });

  return doubleScreenFragment;
};

export default createDoubleScreenFragment;
