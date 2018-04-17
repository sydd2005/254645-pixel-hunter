import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import {goToNextStep, saveAnswerResult, changeLivesCount} from '../game/game-logic';
import createGameScreenMarkup from './game-screen';
import {isAnswerCorrect} from '../game/is-answer-correct';

const createSingleScreenFragment = (state) => {
  const HAS_ANSWERS = true;
  const GAME_CONTENT_MODIFIER = `game__content--wide`;

  const fragmentMarkup = createGameScreenMarkup(state, HAS_ANSWERS, GAME_CONTENT_MODIFIER);

  const singleScreenFragment = createFragmentFromTemplate(fragmentMarkup);
  const gameElement = singleScreenFragment.querySelector(`.game`);

  addDelegatedEventListener(`change`, `.game__content`, () => {
    const checkedAnswerElement = document.querySelector(`[name=question1]:checked`);
    if (checkedAnswerElement) {
      const candidateAnswers = [JSON.parse(checkedAnswerElement.dataset[`answer`])];
      const correctAnswers = state.steps[state.currentStepIndex].options;
      const answerResult = isAnswerCorrect(candidateAnswers, correctAnswers);
      let newState = saveAnswerResult(state, {correct: answerResult, timeElapsed: 15});
      newState = changeLivesCount(newState, answerResult);
      goToNextStep(newState);
    }
  }, gameElement);

  return singleScreenFragment;
};


export default createSingleScreenFragment;
