import {assert} from 'chai';
import createTimer from './timer';

describe(`Check timer creation function`, () => {
  it(`should not return falsy value`, () => {
    assert.notEqual(createTimer(30), null);
  });
});

describe(`Clock is ticking`, () => {
  it(`should change remaining time`, () => {
    const timer = createTimer(20);
    timer.tick();
    assert.notEqual(timer.remainingTime, 20);
  });

  it(`should decrease remaining time by one`, () => {
    const timer = createTimer(10);
    timer.tick();
    assert.equal(timer.remainingTime, 9);
    timer.tick();
    assert.equal(timer.remainingTime, 8);
  });

  it(`remaining time should not be negative`, () => {
    const timer = createTimer(5);
    for (let i = 0; i < 10; i++) {
      timer.tick();
    }
    assert.ok(timer.remainingTime >= 0);
  });

  it(`should notify that time is up`, () => {
    const timer = createTimer(15);
    let notified = false;
    timer.onTimeElapsed = () => {
      notified = true;
    };
    for (let i = 0; i < 25; i++) {
      timer.tick();
    }
    assert.ok(notified);
  });
});
