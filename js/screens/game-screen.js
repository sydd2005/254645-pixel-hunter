import gameScreenHeaderMarkup from './game-screen-header';
import footerMarkup from './footer';
import gameStatsMarkup from './game-stats-component';
import createOptionsMarkup from './options';

const createGameScreenMarkup = (state, hasAnswers, gameContentModifier = ``) => {
  const imageUrls = state.steps[state.currentStepIndex].imageUrls;
  const optionsMarkup = createOptionsMarkup(imageUrls, hasAnswers);

  const fragmentMarkup = `
${gameScreenHeaderMarkup}
<div class="game">
<p class="game__task">${state.steps[state.currentStepIndex].task}</p>
<form class="game__content ${gameContentModifier}">
${optionsMarkup}
</form>
<div class="stats">
${gameStatsMarkup}
</div>
</div>
${footerMarkup}`.trim();

  return fragmentMarkup;
};

export default createGameScreenMarkup;
