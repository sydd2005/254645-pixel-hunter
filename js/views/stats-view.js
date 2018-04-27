import {AbstractView} from "./abstract-view";
import {ANSWERS_POINTS_MAP, LIVES_POINTS, SLOW_PENALTY_POINTS, FAST_BONUS_POINTS} from "../game/points";
import {ANSWER_TYPE} from "../game/dicts";
import calculateResults, {getAnswerType} from "../game/calculate-results";
import headerBackComponentMarkup from "../markup/header-back-component";
import createGameStatsMarkup from "../markup/game-stats-component";
import footerMarkup from "../markup/footer";
import {addDelegatedEventListener} from "../utils";
import {createFragmentFromTemplate} from "../dom-factory";

const StatsView = class extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
    this._resultsContainer = this.element.querySelector(`.result`);
  }

  createSingleGameStatsMarkup(stats, lives, resultNumber) {
    const gameIsWon = lives >= 0;
    const correctAnswersPoints = stats.filter((answer) => answer && answer.correct).length * ANSWERS_POINTS_MAP[ANSWER_TYPE.CORRECT];

    const correctAnswersMarkup = gameIsWon ? `
  <td class="result__points">×&nbsp;100</td>
  <td class="result__total">${correctAnswersPoints}</td>`.trim()
      : `
  <td class="result__total"></td>
  <td class="result__total  result__total--final">fail</td>`.trim();

    const fastAnswerCount = stats.filter((answer) => getAnswerType(answer) === ANSWER_TYPE.FAST).length;
    const speedBonusMarkup = gameIsWon && fastAnswerCount > 0 ? `
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${fastAnswerCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;${FAST_BONUS_POINTS}</td>
    <td class="result__total">${fastAnswerCount * FAST_BONUS_POINTS}</td>
  </tr>`.trim()
      : ``;

    const livesBonusMarkup = lives > 0 ? `
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;${LIVES_POINTS}</td>
    <td class="result__total">${lives * LIVES_POINTS}</td>
  </tr>`.trim()
      : ``;

    const slowAnswerCount = stats.filter((answer) => getAnswerType(answer) === ANSWER_TYPE.SLOW).length;
    const speedPenaltyMarkup = gameIsWon && slowAnswerCount > 0 ? `
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${slowAnswerCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;${SLOW_PENALTY_POINTS}</td>
      <td class="result__total">-${slowAnswerCount * SLOW_PENALTY_POINTS}</td>
    </tr>`.trim()
      : ``;

    const totalPointsMarkup = gameIsWon ? `
  <tr>
    <td colspan="5" class="result__total  result__total--final">${calculateResults(stats, lives)}</td>
  </tr>`.trim()
      : ``;

    const gameResultMarkup = `
  <table class="result__table">
    <tr>
      <td class="result__number">${resultNumber}.</td>
      <td colspan="2">
        ${createGameStatsMarkup(stats)}
      </td>
      ${correctAnswersMarkup}
    </tr>
    ${speedBonusMarkup}
    ${livesBonusMarkup}
    ${speedPenaltyMarkup}
    ${totalPointsMarkup}
  </table>`.trim();

    return gameResultMarkup;
  }

  get template() {
    const resultTitle = this.state.lives >= 0 ? `Победа!` : `Поражение`;
    const elementMarkup = `
  <header class="header">
    ${headerBackComponentMarkup}
  </header>
  <div class="result">
    <h1>${resultTitle}</h1>
    ${this.createSingleGameStatsMarkup(this.state.stats, this.state.lives, 1)}
  </div>
  ${footerMarkup}`.trim();

    return elementMarkup;
  }

  bind() {
    addDelegatedEventListener(`click`, `.header__back`, this.onBackClick, this.element);
  }

  showLoadedResults(results) {
    let resultMarkup = ``;
    results.forEach((result, idx) => {
      resultMarkup = this.createSingleGameStatsMarkup(result.stats, result.lives, results.length - idx + 1) + resultMarkup;
    });
    this._resultsContainer.appendChild(createFragmentFromTemplate(resultMarkup));
  }

  onBackClick() {}

};

export default StatsView;
