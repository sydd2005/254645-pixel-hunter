import {goToNextStep, saveAnswerResult, changeLivesCount} from '../game/game-logic';
import {isAnswerCorrect} from '../game/is-answer-correct';
import SingleImageView from '../views/single-image-view';

const createSingleScreenFragment = (state) => {
  const singleImageView = new SingleImageView(state);

  singleImageView.onAnswer = (answer) => {
    const correctAnswer = state.steps[state.currentStepIndex].options;
    const answerResult = isAnswerCorrect(answer, correctAnswer);
    let newState = saveAnswerResult(state, {correct: answerResult, timeElapsed: 15});
    newState = changeLivesCount(newState, answerResult);
    goToNextStep(newState);
  };

  return singleImageView.element;
};


export default createSingleScreenFragment;
