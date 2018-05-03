import AbstractView from "./abstract-view";
import {addDelegatedEventListener} from "../utils";

const ModalView = class extends AbstractView {

  get template() {
    const overlayStyle = `
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;`.trim();

    const modalStyle = `
    background-color: gold;
    color: black;
    border: 2px solid black;
    box-shadow: 5px 5px 10px 0 gray;
    width: 400px;
    padding: 15px;
    top: 50%;
    left: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;`.trim();

    const buttonStyle = `
    min-width: 100px;
    min-height: 40px;
    font-size: 14px;
    border: 2px solid black;
    background-color: transparent;`.trim();

    return `
    <div style="${overlayStyle}">
      <div style="${modalStyle}">
        <h4>Вся текущая игра будет потеряна, действительно хотите продолжить?</h4>
        <button class="dialog-confirm" style="${buttonStyle}">Да</button>
        <button class="dialog-cancel" style="${buttonStyle}">Нет</button>
      </div>
    </div>`.trim();
  }

  bind() {
    addDelegatedEventListener(`click`, `.dialog-confirm`, this.onConfirm, this.element);
    addDelegatedEventListener(`click`, `.dialog-cancel`, this.onCancel, this.element);
  }

  onConfirm() {}
  onCancel() {}

};

export default ModalView;
