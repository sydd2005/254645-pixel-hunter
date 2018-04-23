import {AbstractView} from "./abstract-view";
import createGameScreenMarkup from "../screens/game-screen";
import {QUESTION_BINDINGS_MAP} from "../game/dicts";
import {addDelegatedEventListener} from "../utils";

const GameView = class extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return createGameScreenMarkup(this.state);
  }

  bind() {
    const header = this.element.querySelector(`.header`);
    addDelegatedEventListener(`click`, `.header__back`, this.onBackClick, header);

    const stepType = this.state.steps[this.state.currentStepIndex].type;
    QUESTION_BINDINGS_MAP[stepType].call(this);
  }

  onBackClick() {}
  onAnswer() {}

};

export default GameView;
