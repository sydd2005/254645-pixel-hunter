import IntroView from "../views/intro-view";
import AbstractPresenter from "./abstract-presenter";
import Application from "../application";

const IntroPresenter = class extends AbstractPresenter {

  constructor() {
    super();
    this._view = new IntroView();
    this._view.onAsteriskClick = Application.showGreeting;
  }

};

export default IntroPresenter;
