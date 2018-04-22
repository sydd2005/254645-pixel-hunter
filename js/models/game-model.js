import {createInitialState, QUESTION_SCREEN_MAP} from "../game/game-logic";
import {cloneObject} from "../utils";

const GameModel = class {
  constructor(playerName) {
    this._playerName = playerName;
    this._state = createInitialState();
  }

  get state() {
    return this._state;
  }

  getNextStepIndex() {
    let nextStepIndex = this._state.currentStepIndex + 1;
    const lastStepIndex = this._state.steps.length - 1;
    nextStepIndex = nextStepIndex < lastStepIndex ? nextStepIndex : lastStepIndex;
    return nextStepIndex;
  }

  createNextStepState() {
    return Object.assign(
        cloneObject(this._state),
        {
          currentStepIndex: this.getNextStepIndex(),
        }
    );
  }

  createStepFragment(state) {
    const stepType = state.steps[state.currentStepIndex].type;
    return QUESTION_SCREEN_MAP[stepType](state);
  }

  isGameOver() {
    return this._state.lives < 0;
  }

  isLastStep() {
    const nextStepState = this.createNextStepState();
    return nextStepState.currentStepIndex === this._state.currentStepIndex;
  }

  goToNextStep() {
    this._state = this.createNextStepState();
  }

  saveAnswerResult(answerResult) {
    this._state.stats[this._state.currentStepIndex] = answerResult;
  }

  changeLivesCount(answerResult) {
    if (!answerResult) {
      this._state.lives = this._state.lives - 1;
    }
  }

};

export default GameModel;
