/* eslint-disable no-constant-condition */

import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions';
// import { getCart } from '../reducers';
import { userApi } from '../services/users';

export function* getAllUsers() {
  const users = yield call(userApi.getUsers);
  yield put(actions.receiveUsers(users));
};

export function* watchGetUsers() {
  yield takeEvery(actions.GET_ALL_USERS, getAllUsers);
};

export default function* root() {
  yield all([fork(getAllUsers), fork(watchGetUsers)]);
};
