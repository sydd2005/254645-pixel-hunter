import AbstractView from "./abstract-view";
import {addDelegatedEventListener} from "../utils";
import createGameScreenMarkup from "../markup/game-screen";

const DoubleImageView = class extends AbstractView {

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
      const checkedQuestion1Element = document.querySelector(`[name=question1]:checked`);
      const checkedQuestion2Element = document.querySelector(`[name=question2]:checked`);
      if (checkedQuestion1Element && checkedQuestion2Element) {
        const answer = [
          JSON.parse(checkedQuestion1Element.dataset[`answer`]),
          JSON.parse(checkedQuestion2Element.dataset[`answer`]),
        ];
        this.onAnswer(answer);
      }
    }, gameElement);
  }

  onAnswer() {}

};

export default DoubleImageView;
