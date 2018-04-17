const placeholder = document.querySelector(`main.central`);

const showScreen = (screenFragment) => {
  placeholder.innerHTML = ``;
  placeholder.appendChild(screenFragment);
};

export default showScreen;
