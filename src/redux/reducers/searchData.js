import { SET_SEARCH_DATA } from "../constants";

const fullDate = new Date();
const year = fullDate.getFullYear();
const mounth = fullDate.getMonth() < 10 ? '0' + (1 + fullDate.getMonth()) : fullDate.getMonth();
const date = fullDate.getDate() < 10 ? '0' + fullDate.getDate() : fullDate.getDate();

const initialState = {
      city: 'Москва',
      date: `${year}-${mounth}-${date}`,
      days: 1,
};

const searchData = (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_SEARCH_DATA:
      return {
        ...state, ...payload
      }
      default: return state;
  }
};

export default searchData;