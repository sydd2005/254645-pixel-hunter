const screens = Array.from(document.querySelectorAll(`template`));
const GREETING_SCREEN_NUMBER = 0;
const KEY_CODE = {
  'left': 37,
  'right': 39,
};

let currentScreenNumber = GREETING_SCREEN_NUMBER;

const placeholder = document.querySelector(`main.central`);

const showScreen = (screenNumber) => {
  placeholder.innerHTML = ``;
  placeholder.appendChild(screens[screenNumber].content.cloneNode(true));
};

const isLeftKey = (keyCode) => keyCode === KEY_CODE.left;
const isRightKey = (keyCode) => keyCode === KEY_CODE.right;

document.addEventListener(`keydown`, (evt) => {
  const keyCode = evt.keyCode;
  if (evt.altKey && (isLeftKey(keyCode) || isRightKey(keyCode))) {
    let screenNumber = isLeftKey(keyCode) ? currentScreenNumber - 1 : currentScreenNumber + 1;
    currentScreenNumber = (screenNumber >= 0 && screenNumber < screens.length) ? screenNumber : currentScreenNumber;
    showScreen(currentScreenNumber);
  }
});

showScreen(GREETING_SCREEN_NUMBER);
