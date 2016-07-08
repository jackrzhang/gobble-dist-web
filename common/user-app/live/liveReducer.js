import {
  RESET_INCOMING_STREAM,
  CHANGE_LIVE_OPTIONS_VIEW,
  CHANGE_LIVE_LIST_FILTER
} from './LiveActions';

const liveInitialState = {
  incomingPeerId: '',
  currentlyWatching: 'N/A',
  description: 'Find active live streams below.',
  startTime: 'N/A',
  view: 'all',
  liveAll: [],
  liveList: [],
  liveListFilter: 'all'
};

const liveReducer = (state = liveInitialState, action) => {
  switch (action.type) {
    case RESET_INCOMING_STREAM:
      return Object.assign({}, state, {
        incomingPeerId: '',
        currentlyWatching: 'N/A',
        description: 'Find active live streams below.',
        startTime: 'N/A'
      });
    case CHANGE_LIVE_OPTIONS_VIEW:
      return Object.assign({}, state, {
        view: action.view
      });
    case CHANGE_LIVE_LIST_FILTER:
      return Object.assign({}, state, {
        liveListFilter: action.filter
      });
    default:
      return state;
  }
};

export default liveReducer;