import { SET_HOTELS } from "../constants";

const initialState = {
  hotelsData: {},
};

const hotels = (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_HOTELS:
      return {
        ...state,
        hotelsData: {...state.hotelsData, ...payload}
      }
      default: return state;
  }
};

export default hotels;