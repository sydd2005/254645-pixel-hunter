import {QUESTION_TYPE, IMAGE_TYPE} from "../game/dicts";

const TRIPLE_QUESTION_MAP = {
  [IMAGE_TYPE.PHOTO]: `Найдите фото среди изображений`,
  [IMAGE_TYPE.PAINT]: `Найдите рисунок среди изображений`,
};

const toOptions = (answer, question) => {
  const options = [];
  if (question.type === QUESTION_TYPE.TRIPLE) {
    options.push({
      imageUrl: answer.image.url,
      imageType: answer.type,
      correct: TRIPLE_QUESTION_MAP[answer.type] === question.question
    });
  } else {
    options.push({
      imageUrl: answer.image.url,
      imageType: IMAGE_TYPE.PHOTO,
      correct: answer.type === IMAGE_TYPE.PHOTO
    });
    options.push({
      imageUrl: answer.image.url,
      imageType: IMAGE_TYPE.PAINT,
      correct: answer.type === IMAGE_TYPE.PAINT
    });
  }
  return options;
};

const adaptServerData = (incomingData) => {
  const questions = incomingData.map((question) => {
    return {
      type: question.type,
      task: question.question,
      imageUrls: question.answers.map((answer) => answer.image.url),
      options: question.answers.reduce((acc, answer) => acc.concat(toOptions(answer, question)), []),
    };
  });

  const gameData = {
    questions,
  };

  return gameData;
};

export default adaptServerData;
