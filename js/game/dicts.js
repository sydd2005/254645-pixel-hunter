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
