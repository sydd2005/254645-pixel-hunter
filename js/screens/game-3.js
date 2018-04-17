import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import {goToNextStep, saveAnswerResult, changeLivesCount} from '../game/game-logic';
import createGameScreenMarkup from './game-screen';
import {isAnswerCorrect} from '../game/is-answer-correct';

const createTripleScreenFragment = (state) => {
  const HAS_ANSWERS = false;
  const GAME_CONTENT_MODIFIER = `game__content--triple`;

  const fragmentMarkup = createGameScreenMarkup(state, HAS_ANSWERS, GAME_CONTENT_MODIFIER);

  const tripleScreenFragment = createFragmentFromTemplate(fragmentMarkup);
  const gameContentForm = tripleScreenFragment.querySelector(`.game__content`);
  addDelegatedEventListener(`click`, `.game__option`, (evt) => {
    const checkedAnswerElement = evt.target;
    if (checkedAnswerElement) {
      const candidateAnswers = [JSON.parse(checkedAnswerElement.dataset[`answer`])];
      const correctAnswers = state.steps[state.currentStepIndex].options;
      const answerResult = isAnswerCorrect(candidateAnswers, correctAnswers);
      let newState = saveAnswerResult(state, {correct: answerResult, timeElapsed: 15});
      newState = changeLivesCount(newState, answerResult);
      goToNextStep(newState);
    }
  }, gameContentForm);

  return tripleScreenFragment;
};

export default createTripleScreenFragment;
