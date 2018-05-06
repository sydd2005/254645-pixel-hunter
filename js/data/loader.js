import adaptServerData from "./data-adapter";
import CONFIG from "../game/config";
import {cloneObject} from "../utils";

const STATUS_NOT_FOUND = 404;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  if (response.status === STATUS_NOT_FOUND) {
    return Promise.resolve({json: () => []});
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener(`load`, () => resolve([url, image]));
    image.addEventListener(`error`, () => reject(`Не удалось загрузить картинку ${url}`));
    image.src = url;
  });
};

const createUrlImageMap = (questionsImages) => {
  const urlImageMap = new Map();
  for (const questionImages of questionsImages) {
    for (const urlImagePair of questionImages) {
      urlImageMap.set(urlImagePair[0], urlImagePair[1]);
    }
  }
  return urlImageMap;
};

const loadImages = async (gameData) => {
  const gameDataWithImages = cloneObject(gameData);
  const questionImagesPromises = gameDataWithImages.questions.map((question) => {
    return Promise.all(question.imageUrls.map((imageUrl) => loadImage(imageUrl)));
  });
  const questionsImages = await Promise.all(questionImagesPromises);
  const urlImageMap = createUrlImageMap(questionsImages);
  gameDataWithImages.urlImageMap = urlImageMap;
  return gameDataWithImages;
};

const Loader = class {

  static async loadData() {
    try {
      const response = await window.fetch(CONFIG.DATA_URL);
      const checkedResponse = await checkStatus(response);
      const jsonResponse = await checkedResponse.json();
      const gameData = await adaptServerData(jsonResponse);
      return loadImages(gameData);
    } catch (error) {
      return Promise.reject(`Произошла ошибка в методе loadData: ${error}`);
    }
  }

  static async saveResults(data, userName) {
    try {
      const requestSettings = {
        headers: {
          'Content-type': `application/json`,
        },
        body: JSON.stringify(data),
        method: `POST`,
      };
      const saveResultsResponse = await window.fetch(`${CONFIG.RESULTS_URL}/${CONFIG.APP_ID}-${userName}`, requestSettings);
      return checkStatus(saveResultsResponse);
    } catch (error) {
      return Promise.reject(`Произошла ошибка в методе saveResults: ${error}`);
    }
  }

  static async loadResults(userName) {
    try {
      const loadResultsResponse = await window.fetch(`${CONFIG.RESULTS_URL}/${CONFIG.APP_ID}-${userName}`);
      const checkedResponse = await checkStatus(loadResultsResponse);
      return checkedResponse.json();

    } catch (error) {
      return Promise.reject(`Произошла ошибка в методе loadResults: ${error}`);
    }
  }
};

export default Loader;
