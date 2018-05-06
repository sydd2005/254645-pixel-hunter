import AbstractView from "./abstract-view";

const ErrorView = class extends AbstractView {

  constructor(error) {
    super();
    this._error = error;
  }

  get template() {
    const errorText = this._error.message ? this._error.message : this._error;
    const wrapperStyle = `
    background-color: darkgray;
    padding: 25px;`.trim();
    const errorParagraphStyle = `
    background-color: gold;
    color: darkred;
    font-weight: bold;
    `.trim();

    return `
    <div style="${wrapperStyle}">
      <p style="${errorParagraphStyle}">${errorText}</p>
    </div>
    `.trim();
  }

};

export default ErrorView;
