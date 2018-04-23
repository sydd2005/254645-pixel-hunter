import GameView from "../views/game-view";
import AbstractPresenter from "./abstract-presenter";
import {isAnswerCorrect} from "../game/is-answer-correct";
import Application from "../application";

const GamePresenter = class extends AbstractPresenter {

  constructor(model) {
    super();
    this._model = model;
    this._view = new GameView(this.model.state);
    this.bind();
  }

  init() {
    this._model.setInitialState();
  }

  bind() {
    this._view.onBackClick = () => Application.showGreeting();
    this._view.onAnswer = (answer) => {
      const currentStep = this._model.state.steps[this._model.state.currentStepIndex];
      const correctAnswer = currentStep.options;
      const answerResult = isAnswerCorrect(answer, correctAnswer);
      this._model.saveAnswerResult({correct: answerResult, timeElapsed: 15});
      this._model.changeLivesCount(answerResult);
      this.goToNextStep();
    };
  }

  goToNextStep() {
    if (this._model.isGameOver || this._model.isLastStep) {
      Application.showStats(this._model);
      return;
    }
    this._model.goToNextStep();
    this._view = new GameView(this._model.state);
    this.bind();
    this.show();
  }

};

export default GamePresenter;
