import {AbstractView} from "./abstract-view";
import createTemplate from "../screens/game-screen";
import {addDelegatedEventListener} from "../utils";

const SingleImageView = class extends AbstractView {

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
        this.onAnswer();
      }
    }, gameElement);
  }

  onAnswer() {}
};

export default SingleImageView;
