import {createInitialState, QUESTION_SCREEN_MAP} from "../game/game-logic";
import {cloneObject} from "../utils";
import createTimer from "../game/timer";
import CONFIG from "../game/config";

const GameModel = class {
  constructor(playerName) {
    this._playerName = playerName;
    this._timer = createTimer(CONFIG.SECONDS_PER_QUESTION);
    this.setInitialState();
  }

  get playerName() {
    return this._playerName;
  }

  get state() {
    return this._state;
  }

  get timer() {
    return this._timer;
  }

  setInitialState() {
    this._state = createInitialState();
  }

  get remainingTime() {
    return this._timer.remainingTime;
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

  get isGameOver() {
    return this._state.lives < 0;
  }

  get isLastStep() {
    const nextStepState = this.createNextStepState();
    return nextStepState.currentStepIndex === this._state.currentStepIndex;
  }

  goToNextStep() {
    this._timer.reset();
    this._state = this.createNextStepState();
  }

  saveAnswerResult(answerResult) {
    const statsResult = {
      correct: answerResult,
      timeElapsed: this._timer.elapsedTime,
    };
    this._state.stats[this._state.currentStepIndex] = statsResult;
  }

  changeLivesCount(answerResult) {
    if (!answerResult) {
      this._state.lives = this._state.lives - 1;
    }
  }

  processAnswer(isCorrect) {
    this.saveAnswerResult(isCorrect);
    this.changeLivesCount(isCorrect);
  }

};

export default GameModel;
