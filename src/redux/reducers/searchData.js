import { SET_SEARCH_DATA } from "../constants";

const checkInDate = new Date().toLocaleString().slice(0, 10).split('.').reverse().join('-')
// const checkOutDate  = (new Date() + 1).toLocaleString().slice(0, 10).split('.').reverse().join('-')
// const fullDate = new Date();
// const year = fullDate.getFullYear();
// const mounth = fullDate.getMonth() < 10 ? '0' + (1 + fullDate.getMonth()) : fullDate.getMonth();
// const date = fullDate.getDate() < 10 ? '0' + fullDate.getDate() : fullDate.getDate();

const initialState = {
      city: 'Москва',
      days: 1,
      checkIn: checkInDate,
      // checkOut: checkOutDate
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