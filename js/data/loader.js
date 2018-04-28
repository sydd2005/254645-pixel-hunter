import adaptServerData from "./data-adapter";
import CONFIG from "../game/config";

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

const Loader = class {

  static loadData() {
    return window.fetch(CONFIG.DATA_URL)
        .then(checkStatus)
        .then(toJSON)
        .then(adaptServerData);
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
