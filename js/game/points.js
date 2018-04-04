export const ANSWER_TYPE = {
  'CORRECT': 1,
  'FAST': 2,
  'SLOW': 3,
  'WRONG': 4,
};

export const ANSWERS_POINTS_MAP = {
  [ANSWER_TYPE.CORRECT]: 100,
  [ANSWER_TYPE.FAST]: 150,
  [ANSWER_TYPE.SLOW]: 50,
  [ANSWER_TYPE.WRONG]: 0,
};

export const LIVES_POINTS = 50;
