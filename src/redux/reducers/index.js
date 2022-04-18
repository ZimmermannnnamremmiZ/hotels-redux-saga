import { combineReducers } from 'redux';
import searchData from './searchData';
import hotels from './hotels';
import favorite from './favorite';

const reducer = combineReducers({
  hotels,
  favorite,
  searchData
});

export default reducer;
