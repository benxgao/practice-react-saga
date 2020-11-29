import R from 'ramda';
import { combineReducers } from 'redux';
import { RECEIVE_USERS } from '../actions';

function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return R.merge(state, action.users);
    default:
      return state;
  }
};

export default combineReducers({
  users,
});
