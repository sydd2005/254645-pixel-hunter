export const addDelegatedEventListener = (eventType, targetSelector, eventHandler, elementToListen = document) => {
  elementToListen.addEventListener(eventType, (evt) => {
    let currentTarget = evt.target;
    while (currentTarget && currentTarget !== elementToListen) {
      if (currentTarget.matches(targetSelector)) {
        eventHandler(evt);
        break;
      }
      currentTarget = currentTarget.parentNode;
    }
  });
};

export const cloneObject = (sourceObject) => {
  return JSON.parse(JSON.stringify(sourceObject));
};
