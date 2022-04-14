import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';
import {rootSaga} from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
const getCompose = () => {
  return compose(applyMiddleware(sagaMiddleware));
};
const store = createStore(reducers, composeWithDevTools(getCompose()));

sagaMiddleware.run(rootSaga);
export default {
  store,
};
