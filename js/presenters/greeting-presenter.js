import AbstractPresenter from "./abstract-presenter";
import GreetingView from "../views/greeting-view";
import Application from "../application";

const GreetingPresenter = class extends AbstractPresenter {

  constructor() {
    super();
    this._view = new GreetingView();
    this._view.onContinueClick = Application.showRules;
  }

};

export default GreetingPresenter;
