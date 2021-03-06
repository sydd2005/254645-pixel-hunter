import AbstractPresenter from "./abstract-presenter";
import StatsView from "../views/stats-view";
import Application from "../application";

const StatsPresenter = class extends AbstractPresenter {

  constructor(model) {
    super();
    this._model = model;
    this._view = new StatsView(this._model.state);
    this.bind();
  }

  bind() {
    this._view.onBackClick = () => {
      Application.showGreeting();
    };
  }

  showLoadedResults(results) {
    this._view.showLoadedResults(results);
  }

};

export default StatsPresenter;
