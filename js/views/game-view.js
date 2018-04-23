import {AbstractView} from "./abstract-view";
import createGameScreenMarkup from "../screens/game-screen";
import {QUESTION_BINDINGS_MAP} from "../game/dicts";

const GameView = class extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
    this.bind();
  }

  get template() {
    return createGameScreenMarkup(this.state);
  }

  bind() {
    const stepType = this.state.steps[this.state.currentStepIndex].type;
    QUESTION_BINDINGS_MAP[stepType].call(this);
  }

  onAnswer() {}

};

export default GameView;
