import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import gameScreenHeaderMarkup from './game-screen-header';
import footerMarkup from './footer';
import gameStatsMarkup from './game-stats-component';
import {goToNextStep} from '../game/game-logic';

const generateTripleScreen = (state) => {
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

  const tripleScreenFragment = createFragmentFromTemplate(elementMarkup);
  addDelegatedEventListener(`click`, `.game__content--triple .game__option`, () => goToNextStep(state));

  return tripleScreenFragment;
};


export default generateTripleScreen;
