import IntroPresenter from "./presenters/intro-presenter";
import GreetingPresenter from "./presenters/greeting-presenter";
import RulesPresenter from "./presenters/rules-presenter";
import GameModel from "./models/game-model";
import GamePresenter from "./presenters/game-presenter";
import StatsPresenter from "./presenters/stats-presenter";
import Loader from "./data/loader";
import ErrorPresenter from "./presenters/error-presenter";

let gameData;

const Application = class {

  static async showWelcome() {
    const introPresenter = new IntroPresenter();
    introPresenter.show();
    try {
      gameData = await Loader.loadData();
      Application.showGreeting();
    } catch (error) {
      Application.showError(error);
    }
  }

  static showGreeting() {
    const greetingPresenter = new GreetingPresenter();
    greetingPresenter.show();
  }

  static showRules() {
    const rulesPresenter = new RulesPresenter();
    rulesPresenter.show();
  }

  static showGame(userName) {
    const gameModel = new GameModel(userName, gameData);
    const gamePresenter = new GamePresenter(gameModel);
    gamePresenter.show();
  }

  static async showStats(gameModel) {
    const currentResults = {
      stats: gameModel.state.stats,
      lives: gameModel.state.lives,
    };
    const statsPresenter = new StatsPresenter(gameModel);
    statsPresenter.show();

    try {
      const savedResults = await Loader.loadResults(gameModel.playerName);
      statsPresenter.showLoadedResults(savedResults);
    } catch (error) {
      Application.showError(error);
    } finally {
      Loader.saveResults(currentResults, gameModel.playerName);
    }
  }

  static showError(error) {
    const errorPresenter = new ErrorPresenter(error);
    errorPresenter.show();
  }

};

export default Application;
