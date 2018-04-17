const createTimer = (timeInterval) => {
  const timer = {
    remainingTime: timeInterval,
    onTimeElapsed: null,
    tick() {
      const newTime = this.remainingTime - 1;
      this.remainingTime = newTime >= 0 ? newTime : 0;

      if (this.remainingTime === 0 && this.onTimeElapsed) {
        this.onTimeElapsed();
      }
    }
  };


  return timer;
};

export default createTimer;
