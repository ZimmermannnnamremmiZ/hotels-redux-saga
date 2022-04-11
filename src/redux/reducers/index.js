import { combineReducers } from 'redux';
import hotels from './hotels';
import searchData from './searchData';

const reducer = combineReducers({
  hotels,
  searchData
});

export default reducer;
