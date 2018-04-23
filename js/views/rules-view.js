import {AbstractView} from "./abstract-view";
import headerBackComponentMarkup from "../screens/header-back-component";
import footerMarkup from "../screens/footer";
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
    const header = this.element.querySelector(`.header`);
    addDelegatedEventListener(`click`, `.header__back`, this.onBackClick, header);

    addDelegatedEventListener(`input`, `.rules__input`, this.onNameInput);

    addDelegatedEventListener(`submit`, `.rules__form`, (evt) => {
      evt.preventDefault();
      this.onFormSubmit();
    });
  }

  onBackClick() {}
  onNameInput() {}
  onFormSubmit() {}

};

export default RulesView;
