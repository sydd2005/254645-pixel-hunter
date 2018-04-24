import GameView from "../views/game-view";
import AbstractPresenter from "./abstract-presenter";
import {isAnswerCorrect} from "../game/is-answer-correct";
import Application from "../application";

const GamePresenter = class extends AbstractPresenter {

  constructor(model) {
    super();
    this._model = model;
    this._view = new GameView(this.model.state);
    this._interval = null;
    this.bind();
  }

  init() {
    this.startTimer();
  }

  startTimer() {
    this._interval = setInterval(() => {
      this._model.timer.tick();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this._interval);
  }

  bind() {
    this._view.onBackClick = () => {
      this.stopTimer();
      Application.showGreeting();
    };
    this._view.onAnswer = (answer) => {
      this.stopTimer();
      const currentStep = this._model.state.steps[this._model.state.currentStepIndex];
      const correctAnswer = currentStep.options;
      const answerResult = isAnswerCorrect(answer, correctAnswer);
      this._model.processAnswer(answerResult);
      this.goToNextStep();
    };
    this._model.timer.onTick = () => {
      this._view.refreshTime(this._model.remainingTime);
    };
    this._model.timer.onTimeElapsed = () => {
      this.stopTimer();
      this._model.processAnswer(false);
      this.goToNextStep();
    };
  }

  show() {
    this.init();
    super.show();
  }

  goToNextStep() {
    if (this._model.isGameOver || this._model.isLastStep) {
      Application.showStats(this._model);
    } else {
      this._model.goToNextStep();
      this._view = new GameView(this._model.state);
      this.bind();
      this.show();
    }
  }

};

export default GamePresenter;
