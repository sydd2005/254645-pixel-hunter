import {AbstractView} from "./abstract-view";
import createGameScreenMarkup from "../markup/game-screen";
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

  set timerShouldBlink(isBlinking) {
    this._timerShouldBlink = isBlinking;
  }

  refreshTime(remainingTime) {
    const timerElement = this.element.querySelector(`.game__timer`);
    if (this._timerShouldBlink) {
      timerElement.style.opacity = 1;
      setTimeout(() => {
        timerElement.style.opacity = 0;
      }, 500);
    }
    timerElement.innerHTML = remainingTime;
  }

  onBackClick() {}
  onAnswer() {}

};

export default GameView;
