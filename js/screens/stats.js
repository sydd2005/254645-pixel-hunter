import createFragmentFromTemplate from '../dom-factory';
import headerBackComponentMarkup from './header-back-component';
import footerMarkup from './footer';
import createGameStatsMarkup from './game-stats-component';
import {ANSWERS_POINTS_MAP} from '../game/points';
import {ANSWER_TYPE} from '../game/dicts';
import calculateResults from '../game/calculate-results';

const createStatsFragment = (state) => {
  const resultTitle = state.lives >= 0 ? `Победа!` : `Поражение`;
  const correctAnswersPoints = state.stats.filter((answer) => answer && answer.correct).length * ANSWERS_POINTS_MAP[ANSWER_TYPE.CORRECT];
  const LIVES_BONUS_POINTS = 50;
  const livesBonusMarkup = state.lives > 0 ? `
<tr>
  <td></td>
  <td class="result__extra">Бонус за жизни:</td>
  <td class="result__extra">${state.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
  <td class="result__points">×&nbsp;${LIVES_BONUS_POINTS}</td>
  <td class="result__total">${state.lives * LIVES_BONUS_POINTS}</td>
</tr>`.trim() : ``;

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
      ${createGameStatsMarkup(state)}
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">${correctAnswersPoints}</td>
  </tr>
  ${livesBonusMarkup}
  <tr>
    <td colspan="5" class="result__total  result__total--final">${calculateResults(state.stats, state.lives)}</td>
  </tr>
</table>
<table class="result__table">
  <tr>
    <td class="result__number">2.</td>
    <td>
      ${createGameStatsMarkup(state)}
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>
<table class="result__table">
  <tr>
    <td class="result__number">3.</td>
    <td colspan="2">
      ${createGameStatsMarkup(state)}
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

  return createFragmentFromTemplate(elementMarkup);
};

export default createStatsFragment;
