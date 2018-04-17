import showScreen from '../show-screen';
import {addDelegatedEventListener} from '../utils';
import createGreetingFragment from './greeting';

const headerBackComponentMarkup = `
<div class="header__back">
<button class="back">
  <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
  <img src="img/logo_small.svg" width="101" height="44">
</button>
</div>`.trim();

addDelegatedEventListener(`click`, `.header__back`, () => showScreen(createGreetingFragment()));

export default headerBackComponentMarkup;
