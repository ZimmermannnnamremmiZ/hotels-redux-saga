import { SET_LOCATION } from "../constants";

const initialState = {
};

const location = (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_LOCATION:
      return {
        ...state,
        ...payload
      }
      default: return state;
  }
};

export default location;