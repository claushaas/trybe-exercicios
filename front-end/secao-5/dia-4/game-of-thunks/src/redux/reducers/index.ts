import { AnyAction, combineReducers } from 'redux';
import {
  CHARACTER_REQUEST_STARTED,
  CHARACTER_REQUEST_SUCCESSFULL,
  CHARACTER_REQUEST_FAILED,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  characterData: {},
  errorMessage: '',
};

const characterReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch(action.type) {
    case CHARACTER_REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        characterData: {},
        errorMessage: '',
      }

    case CHARACTER_REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        characterData: {},
        errorMessage: action.payload,
      }
    
    case CHARACTER_REQUEST_SUCCESSFULL:
      return {
        ...state,
        isFetching: false,
        characterData: action.payload,
        errorMessage: '',
      }

    default:
    return state;
  }
}

const rootReducer = combineReducers({ characterReducer })

export default rootReducer;