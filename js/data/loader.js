import adaptServerData from "./data-adapter";
import CONFIG from "../game/config";
import {cloneObject} from "../utils";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  if (response.status === 404) {
    return Promise.resolve({json: () => []});
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (res) => res.json();

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener(`load`, () => resolve([url, image]));
    image.addEventListener(`error`, () => reject(`Не удалось загрузить картинку ${url}`));
    image.src = url;
  });
};

const loadImages = (gameData) => {
  const gameDataWithImages = cloneObject(gameData);
  const questionImagesPromises = gameDataWithImages.questions.map((question) => {
    return Promise.all(question.imageUrls.map((imageUrl) => loadImage(imageUrl)));
  });
  return Promise.all(questionImagesPromises)
      .then((questionsImages) => {
        const urlImageMap = new Map();
        for (const questionImages of questionsImages) {
          for (const urlImagePair of questionImages) {
            urlImageMap.set(urlImagePair[0], urlImagePair[1]);
          }
        }
        gameDataWithImages.urlImageMap = urlImageMap;
        return gameDataWithImages;
      });
};

const Loader = class {

  static loadData() {
    return window.fetch(CONFIG.DATA_URL)
        .then(checkStatus)
        .then(toJSON)
        .then(adaptServerData)
        .then(loadImages);
  }

  static saveResults(data, userName) {
    const requestSettings = {
      headers: {
        'Content-type': `application/json`,
      },
      body: JSON.stringify(data),
      method: `POST`,
    };
    return window.fetch(`${CONFIG.RESULTS_URL}/${CONFIG.APP_ID}-${userName}`, requestSettings)
        .then(checkStatus);
  }

  static loadResults(userName) {
    return window.fetch(`${CONFIG.RESULTS_URL}/${CONFIG.APP_ID}-${userName}`)
        .then(checkStatus)
        .then(toJSON);
  }
};

export default Loader;
