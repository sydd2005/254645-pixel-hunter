import adaptServerData from "./data-adapter";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (res) => res.json();

const Loader = class {
  static loadData(url) {
    return window.fetch(url)
        .then(checkStatus)
        .then(toJSON)
        // .then((data) => {
        //   console.log(data);
        //   return data;
        // })
        .then(adaptServerData);
  }
};

export default Loader;
