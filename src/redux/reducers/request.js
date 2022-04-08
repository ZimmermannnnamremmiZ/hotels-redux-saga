import { SET_REQUEST } from "../constants";

const fullDate = new Date();
const year = fullDate.getFullYear();
const mounth = fullDate.getMonth();
const date = fullDate.getDate();

const initialState = {
  city: 'Москва',
  date: `${year}-${mounth+1}-${date}`,
  days: 1,
};

const request = (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_REQUEST:
      return {
        ...state,
        city: {...state, ...payload}
      }
      default: return state;
  }
};

export default request;