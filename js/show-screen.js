const placeholder = document.querySelector(`main.central`);

const showScreen = (screenFragment) => {
  placeholder.innerHTML = ``;
  placeholder.appendChild(screenFragment);
};

export const showScreenCrossFade = (screenElement) => {
  const currentScreenElement = placeholder.firstChild;
  screenElement.style.position = `absolute`;
  screenElement.style.opacity = 0;
  currentScreenElement.style.opacity = 1;
  placeholder.appendChild(screenElement);
  const crossFadeInterval = setInterval(() => {
    currentScreenElement.style.opacity -= 0.1;
    screenElement.style.opacity = +screenElement.style.opacity + 0.1;
    if (currentScreenElement.style.opacity === `0`) {
      clearInterval(crossFadeInterval);
      placeholder.removeChild(currentScreenElement);
    }
  }, 200);
};

export default showScreen;
