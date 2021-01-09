import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [],
});

export default (state = defaultState, action) => {
  if(action.type === constants.SEARCH_FOCUS) {
    // immutable's set(), not changing the original obejct value, instead, return a new copy object
    return state.set('focused',true);
  }

  if(action.type === constants.SEARCH_BLUR) {
    return state.set('focused',false);
  }

  return state;
}