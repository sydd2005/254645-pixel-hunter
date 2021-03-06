import createAnswersMarkup from './answers';

const createOptionMarkup = (optionNumber, imageUrl, hasAnswers, stateOption) => {
  const answersMarkup = hasAnswers ? createAnswersMarkup(optionNumber, imageUrl) : ``;
  const optionData = !hasAnswers ? `data-answer='${JSON.stringify(stateOption)}'` : ``;
  return `
<div class="game__option" ${optionData}>
  ${answersMarkup}
</div>`.trim();
};

const createOptionsMarkup = (imageUrls, hasAnswers, stateOptions = []) => {
  return imageUrls.reduce((acc, cur, idx) => {
    return acc + createOptionMarkup(idx + 1, cur, hasAnswers, stateOptions[idx]);
  }, ``);
};

export default createOptionsMarkup;
