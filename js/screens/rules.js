import createFragmentFromTemplate from '../dom-factory';
import showScreen from '../show-screen';
import game1ScreenFragment from '../screens/game-1';
import {addDelegatedEventListener} from '../utils';
import headerBackComponentMarkup from './header-back-component';
import footerMarkup from './footer';

const elementMarkup = `
<header class="header">
${headerBackComponentMarkup}
</header>
<div class="rules">
<h1 class="rules__title">Правила</h1>
<p class="rules__description">Угадай 10 раз для каждого изображения фото <img
  src="img/photo_icon.png" width="16" height="16"> или рисунок <img
  src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>
  На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br>
  <br>
  Готовы?
</p>
<form class="rules__form">
  <input class="rules__input" type="text" placeholder="Ваше Имя">
  <button class="rules__button  continue" type="submit" disabled>Go!</button>
</form>
</div>
${footerMarkup}`.trim();

const rulesFragment = createFragmentFromTemplate(elementMarkup);

addDelegatedEventListener(`input`, `.rules__input`, (evt) => {
  const continueButton = document.querySelector(`.rules__button.continue`);
  continueButton.disabled = evt.target.value === ``;
});

addDelegatedEventListener(`submit`, `.rules__form`, (evt) => {
  evt.preventDefault();
  showScreen(game1ScreenFragment);
});

export default rulesFragment;
