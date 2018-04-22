import showScreen from '../show-screen';
import {createStepFragment, createInitialState} from '../game/game-logic';
import RulesView from '../views/rules-view';

const createRulesScreenFragment = () => {
  const rulesView = new RulesView();

  rulesView.onNameInput = (evt) => {
    const continueButton = document.querySelector(`.rules__button.continue`);
    continueButton.disabled = evt.target.value === ``;
  };

  rulesView.onFormSubmit = () => showScreen(createStepFragment(createInitialState()));

  return rulesView.element;
};

export default createRulesScreenFragment;
