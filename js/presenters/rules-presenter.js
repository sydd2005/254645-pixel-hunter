import AbstractPresenter from "./abstract-presenter";
import RulesView from "../views/rules-view";
import Application from "../application";

const RulesPresenter = class extends AbstractPresenter {

  constructor() {
    super();
    this._view = new RulesView();
    this._view.onNameInput = (evt) => {
      const continueButton = document.querySelector(`.rules__button.continue`);
      continueButton.disabled = evt.target.value === ``;
    };
    this._view.onFormSubmit = () => {
      Application.showGame(`hunter`);
    };
  }
};

export default RulesPresenter;
