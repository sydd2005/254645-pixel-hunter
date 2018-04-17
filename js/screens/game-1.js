import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import {goToNextStep, saveAnswerResult, changeLivesCount} from '../game/game-logic';
import createGameScreenMarkup from './game-screen';
import {isAnswerCorrect} from '../game/is-answer-correct';

const createDoubleScreenFragment = (state) => {
  const HAS_ANSWERS = true;

  const fragmentMarkup = createGameScreenMarkup(state, HAS_ANSWERS);

  const doubleScreenFragment = createFragmentFromTemplate(fragmentMarkup);
  const gameElement = doubleScreenFragment.querySelector(`.game`);

  addDelegatedEventListener(`change`, `.game__content`, () => {
    const checkedQuestion1Element = document.querySelector(`[name=question1]:checked`);
    const checkedQuestion2Element = document.querySelector(`[name=question2]:checked`);
    if (checkedQuestion1Element && checkedQuestion2Element) {
      if (checkedQuestion1Element && checkedQuestion2Element) {
        const candidateAnswers = [
          JSON.parse(checkedQuestion1Element.dataset[`answer`]),
          JSON.parse(checkedQuestion2Element.dataset[`answer`]),
        ];
        const correctAnswers = state.steps[state.currentStepIndex].options;
        const answerResult = isAnswerCorrect(candidateAnswers, correctAnswers);
        let newState = saveAnswerResult(state, {correct: answerResult, timeElapsed: 15});
        newState = changeLivesCount(newState, answerResult);
        goToNextStep(newState);
      }
    }
  }, gameElement);

  return doubleScreenFragment;
};

export default createDoubleScreenFragment;
