import IntroPresenter from "./presenters/intro-presenter";
import GreetingPresenter from "./presenters/greeting-presenter";
import RulesPresenter from "./presenters/rules-presenter";
import GameModel from "./models/game-model";
import GamePresenter from "./presenters/game-presenter";
import StatsPresenter from "./presenters/stats-presenter";
import Loader from "./data/loader";

let gameData;

const Application = class {

  static showWelcome() {
    const introPresenter = new IntroPresenter();
    introPresenter.show();
    Loader.loadData()
        .then((data) => (gameData = data))
        .then(Application.showGreeting);
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

  static showStats(gameModel) {
    const currentResults = {
      stats: gameModel.state.stats,
      lives: gameModel.state.lives,
    };
    const statsPresenter = new StatsPresenter(gameModel);
    statsPresenter.show();

    Loader.loadResults(gameModel.playerName)
        .then((results) => statsPresenter.showLoadedResults(results))
        .then(() => Loader.saveResults(currentResults, gameModel.playerName));
  }

};

export default Application;
