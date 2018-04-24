import {AbstractView} from "./abstract-view";
import {addDelegatedEventListener} from "../utils";
import createGameScreenMarkup from "../markup/game-screen";

const SingleImageView = class extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return createGameScreenMarkup(this.state);
  }

  bind() {
    const gameElement = this.element.querySelector(`.game`);

    addDelegatedEventListener(`change`, `.game__content`, () => {
      const checkedAnswerElement = gameElement.querySelector(`[name=question1]:checked`);
      if (checkedAnswerElement) {
        const answer = [JSON.parse(checkedAnswerElement.dataset[`answer`])];
        this.onAnswer(answer);
      }
    }, gameElement);
  }

  onAnswer() {}
};

export default SingleImageView;
