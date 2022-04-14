import {all, takeLatest} from 'redux-saga/effects';
import newsSaga from './News/newSaga/newsSaga';
import {START_NEWS_SAGA} from './News/types';
import * as api from '../utilities/CommonHelper/commonHelperFetch';

export function* rootSaga() {
  yield all([takeLatest(START_NEWS_SAGA, newsSaga, api)]);
}
