import AbstractView from "./abstract-view";
import createGameScreenMarkup from "../markup/game-screen";
import {QUESTION_BINDINGS_MAP} from "../game/dicts";
import {addDelegatedEventListener} from "../utils";
import createElementFromTemplate from "../dom-factory";

const BLINK_DELAY = 500;

const GameView = class extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return createGameScreenMarkup(this.state);
  }

  render() {
    const gameElement = createElementFromTemplate(this.template);
    const options = gameElement.querySelectorAll(`.game__option`);
    const currentStep = this.state.steps[this.state.currentStepIndex];
    let imageIdx = 0;
    for (let option of options) {
      const optionImageUrl = currentStep.imageUrls[imageIdx];
      const optionImage = this.state.urlImageMap.get(optionImageUrl);
      optionImage.style.maxWidth = `100%`;
      optionImage.style.maxHeight = `100%`;
      optionImage.alt = `Option ${imageIdx + 1}`;
      option.insertAdjacentElement(`afterbegin`, optionImage);
      imageIdx = imageIdx + 1;
    }
    return gameElement;
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
      }, BLINK_DELAY);
    }
    timerElement.innerHTML = remainingTime;
  }

  onBackClick() {}
  onAnswer() {}

};

export default GameView;
