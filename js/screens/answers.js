const createAnswersMarkup = (questionNumber) => {
  return `
<label class="game__answer  game__answer--photo">
  <input name="question${questionNumber}" type="radio" value="photo">
  <span>Фото</span>
</label>
<label class="game__answer  game__answer--wide  game__answer--paint">
  <input name="question${questionNumber}" type="radio" value="paint">
  <span>Рисунок</span>
</label>`.trim();
};

export default createAnswersMarkup;
