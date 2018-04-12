import createFragmentFromTemplate from '../dom-factory';
import {addDelegatedEventListener} from '../utils';
import showScreen from '../show-screen';
import generateSingleScreen from '../screens/game-2';
import gameScreenHeaderMarkup from './game-screen-header';
import footerMarkup from './footer';
import gameStatsMarkup from './game-stats-component';
import { goToNextStep } from '../game/game-logic';

const generateDoubleScreen = (state) => {
  const elementMarkup = `
${gameScreenHeaderMarkup}
<div class="game">
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<div class="stats">
  ${gameStatsMarkup}
</div>
</div>
${footerMarkup}`.trim();

  const doubleScreenFragment = createFragmentFromTemplate(elementMarkup);

  addDelegatedEventListener(`change`, `.game__content`, () => {
    const question1Checked = document.querySelector(`.game__content [name=question1]:checked`) !== null;
    const question2Checked = document.querySelector(`.game__content [name=question2]:checked`) !== null;
    if (question1Checked && question2Checked) {
      goToNextStep(state);
    }
  });

  return doubleScreenFragment;
};

export default generateDoubleScreen;
