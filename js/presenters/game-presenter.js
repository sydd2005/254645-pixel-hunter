import GameView from "../views/game-view";
import AbstractPresenter from "./abstract-presenter";
import {isAnswerCorrect} from "../game/is-answer-correct";
import Application from "../application";

const GamePresenter = class extends AbstractPresenter {

  constructor(model) {
    super();
    this._model = model;
    this._view = this.model.state ? new GameView(this.model.state) : null;
  }

  init() {
    this._model.setInitialState();
    this._view = new GameView(this._model.state);
    this._view.onAnswer = (answer) => {
      const currentStep = this._model.state.steps[this._model.state.currentStepIndex];
      const correctAnswer = currentStep.options;
      const answerResult = isAnswerCorrect(answer, correctAnswer);
      this._model.saveAnswerResult({correct: answerResult, timeElapsed: 15});
      this._model.changeLivesCount(answerResult);
      console.log(`Application.showGame(this._model)`);
    };
  }

};

export default GamePresenter;
