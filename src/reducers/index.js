import { combineReducers } from 'redux'
import { RECEIVE_USERS } from '../actions'

function users(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + 1,
      }
    default:
      return state;
  }
};

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users.reduce((obj, user) => {
          obj[user.id] = user
          return obj
        }, {}),
      };
    default:
      const { userId } = action
      if (userId) {
        return {
          ...state,
          [userId]: users(state[userId], action),
        }
      }

      return state;
  }
};

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users.map(user => user.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

export function getUser(state, id) {
  return state.byId[id];
};

export function getVisibleUsers(state) {
  return state.visibleIds.map(id => getUser(state, id));
};
