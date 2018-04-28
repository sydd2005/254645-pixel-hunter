import CONFIG from "./config";

const createTimer = (timeInterval) => {
  const timer = {
    remainingTime: timeInterval,
    get elapsedTime() {
      return timeInterval - this.remainingTime;
    },
    onTimeIsRunningOut() {},
    onTimeElapsed() {},
    onTick() {},
    tick() {
      const newTime = this.remainingTime - 1;
      this.remainingTime = newTime >= 0 ? newTime : 0;
      if (this.remainingTime === CONFIG.LOW_TIME_LIMIT) {
        this.onTimeIsRunningOut();
      }
      this.onTick();
      if (this.remainingTime === 0 && this.onTimeElapsed) {
        this.onTimeElapsed();
      }
    },
    reset() {
      this.remainingTime = timeInterval;
    }
  };


  return timer;
};

export default createTimer;
