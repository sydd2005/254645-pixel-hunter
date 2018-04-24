const createFragmentFromTemplate = (stringTemplate) => {
  const template = document.createElement(`div`);
  template.innerHTML = stringTemplate;
  // const templateFragment = document.createDocumentFragment();
  // [...template.children].forEach((element) => {
  //   templateFragment.appendChild(element);
  // });
  // return templateFragment;
  return template;
};

export default createFragmentFromTemplate;
