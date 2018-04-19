import {AbstractView} from "./abstract-view";
import createTemplate from "../screens/game-screen";
import {addDelegatedEventListener} from "../utils";
import {isAnswerCorrect} from "../game/is-answer-correct";
import {saveAnswerResult, changeLivesCount, goToNextStep} from "../game/game-logic";

const SingleImageView = class extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const HAS_ANSWERS = true;
    const GAME_CONTENT_MODIFIER = `game__content--wide`;

    return createTemplate(this.state, HAS_ANSWERS, GAME_CONTENT_MODIFIER);
  }

  bind() {
    const gameElement = this.element.querySelector(`.game`);

    addDelegatedEventListener(`change`, `.game__content`, () => {
      const checkedAnswerElement = gameElement.querySelector(`[name=question1]:checked`);
      if (checkedAnswerElement) {
        const candidateAnswers = [JSON.parse(checkedAnswerElement.dataset[`answer`])];
        const correctAnswers = this.state.steps[this.state.currentStepIndex].options;
        const answerResult = isAnswerCorrect(candidateAnswers, correctAnswers);
        let newState = saveAnswerResult(this.state, {correct: answerResult, timeElapsed: 15});
        newState = changeLivesCount(newState, answerResult);
        goToNextStep(newState);
      }
    }, gameElement);
  }
};

export default SingleImageView;
