import {AbstractView} from "./abstract-view";
import createGameScreenMarkup from '../markup/game-screen';
import {addDelegatedEventListener} from "../utils";

const TripleImageView = class extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return createGameScreenMarkup(this.state);
  }

  bind() {
    const gameContentForm = this.element.querySelector(`.game__content`);
    addDelegatedEventListener(`click`, `.game__option`, (evt) => {
      const checkedAnswerElement = evt.target;
      if (checkedAnswerElement) {
        const answer = [JSON.parse(checkedAnswerElement.dataset[`answer`])];
        this.onAnswer(answer);
      }
    }, gameContentForm);
  }

  onAnswer() {}

};

export default TripleImageView;
