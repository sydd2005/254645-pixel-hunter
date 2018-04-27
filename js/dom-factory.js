const createElementFromTemplate = (stringTemplate) => {
  const template = document.createElement(`div`);
  template.innerHTML = stringTemplate;
  return template;
};

export const createFragmentFromTemplate = (stringTemplate) => {
  const template = document.createElement(`template`);
  template.innerHTML = stringTemplate;
  return template.content;
};

export default createElementFromTemplate;
