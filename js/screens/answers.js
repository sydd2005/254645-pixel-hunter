import {IMAGE_TYPE} from "../data/game-data";

const createAnswersMarkup = (questionNumber, imageUrl) => {
  const photoAnswer = {
    imageUrl,
    imageType: IMAGE_TYPE.PHOTO,
    correct: true,
  };
  const paintAnswer = {
    imageUrl,
    imageType: IMAGE_TYPE.PAINT,
    correct: true,
  };
  return `
<label class="game__answer  game__answer--photo">
  <input name="question${questionNumber}" type="radio" value="photo" data-answer='${JSON.stringify(photoAnswer)}'>
  <span>Фото</span>
</label>
<label class="game__answer  game__answer--wide  game__answer--paint">
  <input name="question${questionNumber}" type="radio" value="paint" data-answer='${JSON.stringify(paintAnswer)}'>
  <span>Рисунок</span>
</label>`.trim();
};

export default createAnswersMarkup;
