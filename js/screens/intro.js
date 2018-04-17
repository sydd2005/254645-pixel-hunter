import createFragmentFromTemplate from '../dom-factory';
import showScreen from '../show-screen';
import createGreetingScreenFragment from '../screens/greeting';
import {addDelegatedEventListener} from '../utils';
import footerMarkup from './footer';

const elementMarkup = `
<div id="main" class="central__content">
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
</div>
${footerMarkup}`.trim();

const introFragment = createFragmentFromTemplate(elementMarkup);

addDelegatedEventListener(`click`, `.intro__asterisk`, () => showScreen(createGreetingScreenFragment()));

export default introFragment;
