import StatsView from '../views/stats-view';

const createStatsFragment = (state) => {
  const statsView = new StatsView(state);

  return statsView.element;
};

export default createStatsFragment;
