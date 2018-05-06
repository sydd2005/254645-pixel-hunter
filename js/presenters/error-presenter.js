import AbstractPresenter from "./abstract-presenter";
import ErrorView from "../views/error-view";

const ErrorPresenter = class extends AbstractPresenter {

  constructor(error) {
    super();
    this._view = new ErrorView(error);
  }

};

export default ErrorPresenter;
