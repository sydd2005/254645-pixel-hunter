import {assert} from 'chai';
import {ANSWER_TYPE} from './points';
import calculateResults from './calculate-results';

describe(`Calculate game results`, () => {
  it(`should return -1 when not all answers are given`, () => {
    assert.equal(calculateResults([], 2), -1);
    assert.equal(calculateResults([{type: ANSWER_TYPE.CORRECT}, {type: ANSWER_TYPE.SLOW}], 2), -1);
  });

  it(`should return 1150 points on all medium answers and all lives`, () => {

  });
});
