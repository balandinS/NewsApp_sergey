import * as TYPES from './types';
import {CATEGORIES} from '../../constants';

const initialState = {
  newsList: null,
  isLoading: false,
  errorResponse: false,
  currentCategory: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_FETCH_NEWS:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.SUCCESS_FETCH_NEWS:
      return {
        ...state,
        isLoading: false,
        newsList: action.payload,
      };
    case TYPES.FAILURE_RESPONSE_NEWS:
      return {
        ...state,
        errorResponse: true,
      };
    case TYPES.SELECTED_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    default:
      return state;
  }
};
