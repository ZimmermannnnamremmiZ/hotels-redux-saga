import { combineReducers } from 'redux';
import hotels from './hotels';
import request from './request';

const reducer = combineReducers({
  hotels,
  request
});

export default reducer;
