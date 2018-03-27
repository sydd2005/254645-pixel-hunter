const screens = Array.from(document.querySelectorAll(`template`));
const greetingScreenNumber = 0;
const KEY_CODE = {
  'left': 37,
  'right': 39,
};

let currentScreenNumber = greetingScreenNumber;

const showScreen = (screenNumber) => {
  const placeholder = document.querySelector(`main.central`);
  placeholder.innerHTML = ``;
  placeholder.appendChild(screens[screenNumber].content.cloneNode(true));
};

document.addEventListener(`keydown`, (evt) => {
  const directionKey = evt.keyCode;
  if (evt.altKey && (directionKey === KEY_CODE.left || directionKey === KEY_CODE.right)) {
    let screenNumber = directionKey === KEY_CODE.left ? currentScreenNumber - 1 : currentScreenNumber + 1;
    currentScreenNumber = (screenNumber >= 0 && screenNumber < screens.length) ? screenNumber : currentScreenNumber;
    showScreen(currentScreenNumber);
  }
});

showScreen(greetingScreenNumber);
