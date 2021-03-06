import AbstractPresenter from "./abstract-presenter";
import RulesView from "../views/rules-view";
import Application from "../application";

const RulesPresenter = class extends AbstractPresenter {

  constructor() {
    super();
    this._view = new RulesView();
    this.bind();
  }

  bind() {
    this._view.onBackClick = () => Application.showGreeting();

    this._view.onNameInput = (evt) => {
      const continueButton = this._view.element.querySelector(`.rules__button.continue`);
      continueButton.disabled = evt.target.value === ``;
    };

    this._view.onFormSubmit = (playerName) => {
      Application.showGame(playerName);
    };
  }

};

export default RulesPresenter;
