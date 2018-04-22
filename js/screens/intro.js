import showScreen from '../show-screen';
import createGreetingScreenFragment from '../screens/greeting';
import IntroView from '../views/intro-view';

const createIntroFragment = () => {
  const introView = new IntroView();
  introView.onAsteriskClick = () => showScreen(createGreetingScreenFragment());

  return introView.element;
};

export default createIntroFragment;
