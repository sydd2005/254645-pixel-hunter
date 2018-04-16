import createGameScreenHeaderMarkup from './game-screen-header';
import footerMarkup from './footer';
import createGameStatsMarkup from './game-stats-component';
import createOptionsMarkup from './options';

const createGameScreenMarkup = (state, hasAnswers, gameContentModifier = ``) => {
  const currentStep = state.steps[state.currentStepIndex];
  const gameScreenHeaderMarkup = createGameScreenHeaderMarkup(state);
  const optionsMarkup = createOptionsMarkup(currentStep.imageUrls, hasAnswers, currentStep.options);
  const gameStatsMarkup = createGameStatsMarkup(state);

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
