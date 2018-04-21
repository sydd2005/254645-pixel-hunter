import {goToNextStep, saveAnswerResult, changeLivesCount} from '../game/game-logic';
import {isAnswerCorrect} from '../game/is-answer-correct';
import DoubleImageView from '../views/double-image-view';

const createDoubleScreenFragment = (state) => {
  const doubleImageView = new DoubleImageView(state);

  doubleImageView.onAnswer = (answer) => {
    const correctAnswer = state.steps[state.currentStepIndex].options;
    const answerResult = isAnswerCorrect(answer, correctAnswer);
    let newState = saveAnswerResult(state, {correct: answerResult, timeElapsed: 15});
    newState = changeLivesCount(newState, answerResult);
    goToNextStep(newState);
  };

  return doubleImageView.element;
};

export default createDoubleScreenFragment;
