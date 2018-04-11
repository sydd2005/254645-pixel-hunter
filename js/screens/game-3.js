import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import showScreen from '../show-screen';
import statsScreenFragment from '../screens/stats';
import gameScreenHeaderMarkup from './game-screen-header';
import footerMarkup from './footer';
import gameStatsMarkup from './game-stats-component';

const elementMarkup = `
${gameScreenHeaderMarkup}
<div class="game">
<p class="game__task">Найдите рисунок среди изображений</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
</form>
<div class="stats">
  ${gameStatsMarkup}
</div>
</div>
${footerMarkup}`.trim();

const game3Fragment = createFragmentFromTemplate(elementMarkup);

addDelegatedEventListener(`click`, `.game__content--triple .game__option`, () => showScreen(statsScreenFragment));

export default game3Fragment;
