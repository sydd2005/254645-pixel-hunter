import {getAnswerType} from "../game/calculate-results";
import {ANSWER_MODIFIER_MAP} from "../game/dicts";

const createGameStatsMarkup = (stats) => {
  const statsItems = stats.map((statsItem) => {
    return `<li class="stats__result stats__result--${ANSWER_MODIFIER_MAP[getAnswerType(statsItem)]}"></li>`;
  }).join(``);
  return `
<ul class="stats">
  ${statsItems}
</ul>`.trim();
};

export default createGameStatsMarkup;
