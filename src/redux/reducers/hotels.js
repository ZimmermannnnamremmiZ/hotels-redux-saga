import { SET_HOTELS } from "../constants";

const initialState = {
};

const hotels = (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_HOTELS:
      return {
        ...state,
        ...payload
      }
      default: return state;
  }
};

export default hotels;