import headerBackComponentMarkup from './header-back-component';
import CONFIG from '../game/config';

const createGameScreenHeaderMarkup = (state) => {
  const emptyHeartsCount = CONFIG.MAX_LIVES - state.lives;
  const livesMarkup = `${(new Array(emptyHeartsCount))
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(`    `)}
    ${(new Array(state.lives))
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(`    `)}`;

  return `
<header class="header">
${headerBackComponentMarkup}
<h1 class="game__timer">${state.time}</h1>
<div class="game__lives">
  ${livesMarkup}
</div>
</header>`.trim();
};

export default createGameScreenHeaderMarkup;
