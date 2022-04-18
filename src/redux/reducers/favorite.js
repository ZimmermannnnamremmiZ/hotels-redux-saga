import { SET_FAVORITE } from "../constants";

const initialState = {
};

const favorite = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_FAVORITE:
      return{
        ...state,
        ...payload
      }
      default: return state;
  }
};

export default favorite;