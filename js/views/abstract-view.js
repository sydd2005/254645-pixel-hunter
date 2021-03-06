import createFragmentFromTemplate from "../dom-factory";

const AbstractView = class AbstractView {
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

  set element(node) {
    this._element = node;
  }
};

export default AbstractView;
