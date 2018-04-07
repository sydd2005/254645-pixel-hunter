// const createTimer = (timeInterval) => {
//   const timer = new EventTarget();
//   timer.remainingTime = timeInterval;

//   timer.tick = function () {
//     const newTime = this.remainingTime - 1;
//     this.remainingTime = newTime >= 0 ? newTime : 0;

//     if (this.remainingTime === 0) {
//       const timeElapsedEvent = new Event(`timeElapsed`);
//       this.dispatchEvent(timeElapsedEvent);
//     }
//   };

//   return timer;
// };

const createTimer = (timeInterval) => {
  const timer = {
    remainingTime: timeInterval,
    onTimeElapsed: null,
  };

  timer.tick = function () {
    const newTime = this.remainingTime - 1;
    this.remainingTime = newTime >= 0 ? newTime : 0;

    if (this.remainingTime === 0 && this.onTimeElapsed) {
      this.onTimeElapsed();
    }
  };

  return timer;
};

export default createTimer;
