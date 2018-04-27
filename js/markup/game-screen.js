import createGameScreenHeaderMarkup from './game-screen-header';
import footerMarkup from './footer';
import createGameStatsMarkup from './game-stats-component';
import createOptionsMarkup from './options';
import {QUESTION_HAS_ANSWERS_MAP, QUESTION_MODIFIER_MAP} from '../game/dicts';

const createGameScreenMarkup = (state) => {
  const currentStep = state.steps[state.currentStepIndex];
  const stepType = currentStep.type;
  const gameScreenHeaderMarkup = createGameScreenHeaderMarkup(state);
  const optionsMarkup = createOptionsMarkup(currentStep.imageUrls, QUESTION_HAS_ANSWERS_MAP[stepType], currentStep.options);
  const gameStatsMarkup = createGameStatsMarkup(state.stats);

  const fragmentMarkup = `
${gameScreenHeaderMarkup}
<div class="game">
<p class="game__task">${state.steps[state.currentStepIndex].task}</p>
<form class="game__content ${QUESTION_MODIFIER_MAP[stepType]}">
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
