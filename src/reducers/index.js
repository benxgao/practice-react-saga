import R from 'ramda';
import { combineReducers } from 'redux';
import { GET_ALL_USERS, RECEIVE_USERS } from '../actions';

function users(state = {}, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return state;

    case RECEIVE_USERS:
      return R.merge(state, action.payload);

    default:
      return state;
  }
};

export default combineReducers({
  users,
});
