import ReactGA from 'react-ga';
import mixpanelParts from './utils/mixpanel'

ReactGA.initialize('UA-40397307-8');
mixpanelParts.scriptAsEval();

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
