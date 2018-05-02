import AbstractPresenter from "./abstract-presenter";
import GreetingView from "../views/greeting-view";
import Application from "../application";
import {showScreenCrossFade} from "../show-screen";

const GreetingPresenter = class extends AbstractPresenter {

  constructor() {
    super();
    this._view = new GreetingView();
    this._view.onContinueClick = Application.showRules;
  }

  show() {
    showScreenCrossFade(this._view.element);
  }

};

export default GreetingPresenter;
