import {goToNextStep, saveAnswerResult, changeLivesCount} from '../game/game-logic';
import {isAnswerCorrect} from '../game/is-answer-correct';
import TripleImageView from '../views/triple-image-view';

const createTripleScreenFragment = (state) => {
  const tripleImageView = new TripleImageView(state);
  tripleImageView.onAnswer = (answer) => {
    const correctAnswer = state.steps[state.currentStepIndex].options;
    const answerResult = isAnswerCorrect(answer, correctAnswer);
    let newState = saveAnswerResult(state, {correct: answerResult, timeElapsed: 15});
    newState = changeLivesCount(newState, answerResult);
    goToNextStep(newState);
  };

  return tripleImageView.element;
};

export default createTripleScreenFragment;
