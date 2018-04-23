import showScreen from "../show-screen";

const AbstractPresenter = class {

  get model() {
    return this._model;
  }

  get view() {
    return this._view;
  }

  show() {
    showScreen(this._view.element);
  }

};

export default AbstractPresenter;
