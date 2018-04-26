const createTimer = (timeInterval) => {
  const timer = {
    remainingTime: timeInterval,
    get elapsedTime() {
      return timeInterval - this.remainingTime;
    },
    onTimeElapsed() {},
    onTick() {},
    tick() {
      const newTime = this.remainingTime - 1;
      this.remainingTime = newTime >= 0 ? newTime : 0;
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
