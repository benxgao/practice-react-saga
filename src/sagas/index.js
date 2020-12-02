/* eslint-disable no-constant-condition */

import { take, put, call, fork, select, takeEvery, takeLatest, all } from 'redux-saga/effects';
import {GET_ALL_USERS, RECEIVE_USERS} from '../actions';
import { userApi } from '../services/users';

export function* getUsers() {
  const userList = yield call(userApi.getAllUsers);

  yield put({ type: RECEIVE_USERS, payload: userList });
};

export function* watchGetUsers() {
  yield takeLatest(GET_ALL_USERS, getUsers);
};

export default function* root() {
  yield all([
    fork(watchGetUsers),
  ]);
};
