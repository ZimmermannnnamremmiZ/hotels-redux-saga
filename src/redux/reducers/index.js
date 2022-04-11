import { combineReducers } from 'redux';
import location from './location';
import searchData from './searchData';
import hotels from './hotels';

const reducer = combineReducers({
  location,
  hotels,
  searchData
});

export default reducer;
