import {assert} from 'chai';
import calculateResults from './calculate-results';

describe(`Calculate game results`, () => {
  it(`should return -1 when not all answers are given`, () => {
    assert.equal(calculateResults([], 2), -1);
    assert.equal(calculateResults([{correct: true, timeElapsed: 15}, {correct: false, timeElapsed: 7}], 2), -1);
  });

  it(`should return 1150 points on all correct answers and all lives`, () => {
    const mediumAnswers = Array(10).fill({correct: true, timeElapsed: 12});
    assert.equal(calculateResults(mediumAnswers, 3), 1150);
  });

  it(`should return 850 points on 8 correct answers and one live`, () => {
    const correctAnswers = Array(8).fill({correct: true, timeElapsed: 15});
    const wrongAnswers = Array(2).fill({correct: false, timeElapsed: 25});
    const allAnswers = correctAnswers.concat(wrongAnswers);
    assert.equal(calculateResults(allAnswers, 1), 850);
  });

  it(`should return 950 on 3 fast, 4 slow, 2 correct answers and 2 lives`, () => {
    const fastAnswers = Array(3).fill({correct: true, timeElapsed: 5});
    const slowAnswers = Array(4).fill({correct: true, timeElapsed: 25});
    const correctAnswers = Array(2).fill({correct: true, timeElapsed: 14});
    const wrongAnswers = [{correct: false, timeElapsed: 0}];
    const allAnswers = fastAnswers.concat(slowAnswers).concat(correctAnswers).concat(wrongAnswers);
    assert.equal(calculateResults(allAnswers, 2), 950);
  });

  it(`should return 700 on 2 fast, 2 slow, 3 correct answers and 0 lives`, () => {
    const fastAnswers = Array(2).fill({correct: true, timeElapsed: 5});
    const slowAnswers = Array(2).fill({correct: true, timeElapsed: 25});
    const correctAnswers = Array(3).fill({correct: true, timeElapsed: 14});
    const wrongAnswers = Array(3).fill({correct: false, timeElapsed: 0});
    const allAnswers = fastAnswers.concat(slowAnswers).concat(correctAnswers).concat(wrongAnswers);
    assert.equal(calculateResults(allAnswers, 0), 700);
  });
});
