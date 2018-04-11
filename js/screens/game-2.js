import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import showScreen from '../show-screen';
import game3ScreenFragment from '../screens/game-3';
import gameScreenHeaderMarkup from './game-screen-header';
import footerMarkup from './footer';
import gameStatsMarkup from './game-stats-component';

const elementMarkup = `
${gameScreenHeaderMarkup}
<div class="game">
<p class="game__task">Угадай, фото или рисунок?</p>
<form class="game__content  game__content--wide">
  <div class="game__option">
    <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<div class="stats">
  ${gameStatsMarkup}
</div>
</div>
${footerMarkup}`.trim();

const game2Fragment = createFragmentFromTemplate(elementMarkup);

addDelegatedEventListener(`click`, `.game__content--wide .game__answer`, () => showScreen(game3ScreenFragment));

export default game2Fragment;
