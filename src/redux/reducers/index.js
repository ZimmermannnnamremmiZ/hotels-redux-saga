import { combineReducers } from 'redux';
import searchData from './searchData';
import hotels from './hotels';

const reducer = combineReducers({
  hotels,
  searchData
});

export default reducer;
