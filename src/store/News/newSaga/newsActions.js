import {call, select, put} from 'redux-saga/effects';
import * as TYPES from '../types';
import {CATEGORIES} from '../../../constants';
export function* newsGetAndUpdate({fetchData}, actionNum = 1) {
  const updateUserTypes = {
    1: {
      started: TYPES.START_FETCH_NEWS,
      success: TYPES.SUCCESS_FETCH_NEWS,
      failed: TYPES.FAILURE_RESPONSE_NEWS,
    },
  };
  yield put({type: updateUserTypes[actionNum].started});
  try {
    const category = yield select(({NewsReduce}) => NewsReduce.currentCategory);
    const params = !!category
      ? `sources?category$category=${category}`
      : 'sources';
    const newsResponse = yield call(fetchData, params);
    yield put({
      type: updateUserTypes[actionNum].success,
      payload: newsResponse,
    });
  } catch (error) {
    yield put({type: updateUserTypes[actionNum].failed});
  }
}
