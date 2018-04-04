import {assert} from 'chai';
import calculateResults from './calculate-results';

describe(`Calculate game results`, () => {
  it(`should return -1 when not all answers are given`, () => {
    assert.equal(calculateResults([], 2), -1);
    assert.equal(calculateResults([{correct: true, timeElapsed: 15}, {correct: false, timeElapsed: 7}], 2), -1);
  });

  it(`should return 1150 points on all medium answers and all lives`, () => {
    const mediumAnswers = Array(10).fill({correct: true, timeElapsed: 12});
    assert.equal(calculateResults(mediumAnswers, 3), 1150);
  });
});
