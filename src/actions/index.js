export const GET_ALL_USERS = 'GET_ALL_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function loadUserPage() {
  return {
    type: GET_ALL_USERS,
  }
};

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: users,
  }
};
