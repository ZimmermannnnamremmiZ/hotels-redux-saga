import { SET_HOTELS } from "../constants";

const hotels = (state = {}, {type, payload}) => {
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