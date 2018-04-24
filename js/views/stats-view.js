import {AbstractView} from "./abstract-view";
import {ANSWERS_POINTS_MAP, LIVES_POINTS, SLOW_PENALTY_POINTS, FAST_BONUS_POINTS} from "../game/points";
import {ANSWER_TYPE} from "../game/dicts";
import calculateResults, {getAnswerType} from "../game/calculate-results";
import headerBackComponentMarkup from "../markup/header-back-component";
import createGameStatsMarkup from "../markup/game-stats-component";
import footerMarkup from "../markup/footer";
import {addDelegatedEventListener} from "../utils";

const StatsView = class extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const gameIsWon = this.state.lives >= 0;
    const resultTitle = gameIsWon ? `Победа!` : `Поражение`;
    const correctAnswersPoints = this.state.stats.filter((answer) => answer && answer.correct).length * ANSWERS_POINTS_MAP[ANSWER_TYPE.CORRECT];

    const correctAnswersMarkup = gameIsWon ? `
  <td class="result__points">×&nbsp;100</td>
  <td class="result__total">${correctAnswersPoints}</td>`.trim()
      : `
  <td class="result__total"></td>
  <td class="result__total  result__total--final">fail</td>`.trim();

    const fastAnswerCount = this.state.stats.filter((answer) => getAnswerType(answer) === ANSWER_TYPE.FAST).length;
    const speedBonusMarkup = fastAnswerCount > 0 ? `
  <tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${fastAnswerCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">×&nbsp;${FAST_BONUS_POINTS}</td>
    <td class="result__total">${fastAnswerCount * FAST_BONUS_POINTS}</td>
  </tr>`.trim()
      : ``;

    const livesBonusMarkup = this.state.lives > 0 ? `
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${this.state.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;${LIVES_POINTS}</td>
    <td class="result__total">${this.state.lives * LIVES_POINTS}</td>
  </tr>`.trim()
      : ``;

    const slowAnswerCount = this.state.stats.filter((answer) => getAnswerType(answer) === ANSWER_TYPE.SLOW).length;
    const speedPenaltyMarkup = slowAnswerCount > 0 ? `
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
    <td colspan="5" class="result__total  result__total--final">${calculateResults(this.state.stats, this.state.lives)}</td>
  </tr>`.trim()
      : ``;

    const elementMarkup = `
  <header class="header">
  ${headerBackComponentMarkup}
  </header>
  <div class="result">
  <h1>${resultTitle}</h1>
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">
        ${createGameStatsMarkup(this.state)}
      </td>
      ${correctAnswersMarkup}
    </tr>
    ${speedBonusMarkup}
    ${livesBonusMarkup}
    ${speedPenaltyMarkup}
    ${totalPointsMarkup}
  </table>
  <table class="result__table">
    <tr>
      <td class="result__number">2.</td>
      <td>
        ${createGameStatsMarkup(this.state)}
      </td>
      <td class="result__total"></td>
      <td class="result__total  result__total--final">fail</td>
    </tr>
  </table>
  <table class="result__table">
    <tr>
      <td class="result__number">3.</td>
      <td colspan="2">
        ${createGameStatsMarkup(this.state)}
      </td>
      <td class="result__points">×&nbsp;100</td>
      <td class="result__total">900</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">100</td>
    </tr>
    <tr>
      <td colspan="5" class="result__total  result__total--final">950</td>
    </tr>
  </table>
  </div>
  ${footerMarkup}`.trim();

    return elementMarkup;
  }

  bind() {
    const header = this.element.querySelector(`.header`);
    addDelegatedEventListener(`click`, `.header__back`, this.onBackClick, header);
  }

  onBackClick() {}

};

export default StatsView;
