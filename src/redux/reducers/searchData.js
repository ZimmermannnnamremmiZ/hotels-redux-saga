import { SET_SEARCH_DATA } from "../constants";

const todayDate = new Date()

const initialState = {
      city: 'Москва',
      days: 1,
      checkIn: todayDate,
      checkOut: todayDate
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