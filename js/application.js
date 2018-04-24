import IntroPresenter from "./presenters/intro-presenter";
import GreetingPresenter from "./presenters/greeting-presenter";
import RulesPresenter from "./presenters/rules-presenter";
import GameModel from "./models/game-model";
import GamePresenter from "./presenters/game-presenter";
import StatsPresenter from "./presenters/stats-presenter";

const Application = class {

  static showWelcome() {
    const introPresenter = new IntroPresenter();
    introPresenter.show();
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
    const gameModel = new GameModel(userName);
    const gamePresenter = new GamePresenter(gameModel);
    gamePresenter.show();
  }

  static showStats(gameModel) {
    const statsPresenter = new StatsPresenter(gameModel);
    statsPresenter.show();
  }

};

export default Application;