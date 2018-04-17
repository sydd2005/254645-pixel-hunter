import createFragmentFromTemplate from "../dom-factory";

export const AbstractView = class AbstractView {
  get template() {
    throw new Error(`Абстрактный метод должен быть переопределен в наследниках!`);
  }

  render() {
    return createFragmentFromTemplate(this.template);
  }

  bind() {
    // наследник может добавлять логику обработки событий
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind(this._element);
    }
    return this._element;
  }
};
