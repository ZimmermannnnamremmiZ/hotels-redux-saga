import { SET_TOKEN } from "../constants";

const initialState = {
  token: null
}

const token = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_TOKEN:
      return{
        ...state,
        ...payload
      }
      default: return state;
  }
};

export default token;