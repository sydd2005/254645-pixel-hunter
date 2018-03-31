const placeholder = document.querySelector(`main.central`);

const showScreen = (screenFragment) => {
  placeholder.innerHTML = ``;
  placeholder.appendChild(screenFragment.cloneNode(true));
};

export default showScreen;
