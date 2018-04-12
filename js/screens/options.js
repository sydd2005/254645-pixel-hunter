import createAnswersMarkup from './answers';

const createOptionMarkup = (optionNumber, imageUrl, hasAnswers) => {
  const answersMarkup = hasAnswers ? createAnswersMarkup(optionNumber) : ``;
  return `<div class="game__option">
  <img src="${imageUrl}" alt="Option ${optionNumber}" style="max-width: 100%; max-height: 100%;">
  ${answersMarkup}
</div>`.trim();
};

const createOptionsMarkup = (imageUrls, hasAnswers) => {
  return imageUrls.reduce((acc, cur, idx) => {
    return acc + createOptionMarkup(idx + 1, cur, hasAnswers);
  }, ``);
};

export default createOptionsMarkup;
