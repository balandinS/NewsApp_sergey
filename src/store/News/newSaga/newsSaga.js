import {
  all,
  call,
  put,
  take,
  takeLatest,
  cancel,
  fork,
} from 'redux-saga/effects';
import * as sagaActions from './newsActions';
import * as TYPES from '../types';

function* NewsStart(api) {
  const results = yield all([call(sagaActions.newsGetAndUpdate, api, 1)]);
  const weAreAllForked = yield fork(listenToUpdateSagas);
  
 // yield take(TYPES.RESET_NEWS_DATA);
  // cancel listeners for update sagas when component unmount
  //yield cancel(weAreAllForked);
}

function* listenToUpdateSagas(api) {
  yield all([takeLatest(TYPES.UPDATE_CATEGORY, updateCategoryStatementSaga)]);
}

function* updateCategoryStatementSaga({payload}) {
  yield put({type: 'SELECTED_CATEGORY', payload});
}

export default NewsStart;
