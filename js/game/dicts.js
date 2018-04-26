import {addDelegatedEventListener} from "../utils";

export const ANSWER_TYPE = {
  'UNKNOWN': 0,
  'CORRECT': 1,
  'FAST': 2,
  'SLOW': 3,
  'WRONG': 4,
};

export const ANSWER_MODIFIER_MAP = {
  [ANSWER_TYPE.UNKNOWN]: `unknown`,
  [ANSWER_TYPE.CORRECT]: `correct`,
  [ANSWER_TYPE.FAST]: `fast`,
  [ANSWER_TYPE.SLOW]: `slow`,
  [ANSWER_TYPE.WRONG]: `wrong`,
};

export const QUESTION_TYPE = {
  'SINGLE': 1,
  'DOUBLE': 2,
  'TRIPLE': 3,
};

export const IMAGE_TYPE = {
  'PHOTO': `photo`,
  'PAINT': `paint`,
};

export const QUESTION_HAS_ANSWERS_MAP = {
  [QUESTION_TYPE.SINGLE]: true,
  [QUESTION_TYPE.DOUBLE]: true,
  [QUESTION_TYPE.TRIPLE]: false,
};

export const QUESTION_MODIFIER_MAP = {
  [QUESTION_TYPE.SINGLE]: `game__content--wide`,
  [QUESTION_TYPE.DOUBLE]: ``,
  [QUESTION_TYPE.TRIPLE]: `game__content--triple`,
};

export const QUESTION_BINDINGS_MAP = {
  [QUESTION_TYPE.SINGLE]() {
    const gameElement = this.element.querySelector(`.game`);

    addDelegatedEventListener(`change`, `.game__content`, () => {
      const checkedAnswerElement = gameElement.querySelector(`[name=question1]:checked`);
      if (checkedAnswerElement) {
        const answer = [JSON.parse(checkedAnswerElement.dataset[`answer`])];
        this.onAnswer(answer);
      }
    }, gameElement);
  },
  [QUESTION_TYPE.DOUBLE]() {
    const gameElement = this.element.querySelector(`.game`);

    addDelegatedEventListener(`change`, `.game__content`, () => {
      const checkedQuestion1Element = gameElement.querySelector(`[name=question1]:checked`);
      const checkedQuestion2Element = gameElement.querySelector(`[name=question2]:checked`);
      if (checkedQuestion1Element && checkedQuestion2Element) {
        const answer = [
          JSON.parse(checkedQuestion1Element.dataset[`answer`]),
          JSON.parse(checkedQuestion2Element.dataset[`answer`]),
        ];
        this.onAnswer(answer);
      }
    }, gameElement);
  },
  [QUESTION_TYPE.TRIPLE]() {
    const gameContentForm = this.element.querySelector(`.game__content`);
    addDelegatedEventListener(`click`, `.game__option`, (evt) => {
      const checkedAnswerElement = evt.target;
      if (checkedAnswerElement) {
        const answer = [JSON.parse(checkedAnswerElement.dataset[`answer`])];
        this.onAnswer(answer);
      }
    }, gameContentForm);
  },
};
