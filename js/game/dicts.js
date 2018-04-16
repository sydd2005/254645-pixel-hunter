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
