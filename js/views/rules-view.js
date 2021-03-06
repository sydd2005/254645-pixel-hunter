import AbstractView from "./abstract-view";
import headerBackComponentMarkup from "../markup/header-back-component";
import footerMarkup from "../markup/footer";
import {addDelegatedEventListener} from "../utils";

const RulesView = class extends AbstractView {

  get template() {
    return `
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
  }

  bind() {
    addDelegatedEventListener(`click`, `.header__back`, this.onBackClick, this.element);

    addDelegatedEventListener(`input`, `.rules__input`, this.onNameInput, this.element);

    addDelegatedEventListener(`submit`, `.rules__form`, (evt) => {
      evt.preventDefault();
      const playerName = this.element.querySelector(`.rules__input`).value;
      this.onFormSubmit(playerName);
    }, this.element);
  }

  onBackClick() {}
  onNameInput() {}
  onFormSubmit() {}

};

export default RulesView;
