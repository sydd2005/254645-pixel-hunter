import {AbstractView} from "./abstract-view";
import footerMarkup from "../screens/footer";
import {addDelegatedEventListener} from "../utils";

const IntroView = class extends AbstractView {

  get template() {
    return `
    <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    </div>
    ${footerMarkup}`.trim();
  }

  bind() {
    addDelegatedEventListener(`click`, `.intro__asterisk`, this.onAsteriskClick);
  }

  onAsteriskClick() {}

};

export default IntroView;
