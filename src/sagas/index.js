/* eslint-disable no-constant-condition */

import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions';
import { userApi } from '../services/users';

export function* getUsers() {
  const users = yield call(userApi.getAllUsers);
  yield put(actions.receiveUsers(users));
};

export function* watchGetUsers() {
  while(true) {
    yield takeEvery(actions.loadUserPage, getUsers);
  }
};

export default function* root() {
  yield all([
    // fork(getUsers),
    fork(watchGetUsers)
  ]);
};
