import { SET_FAVORITE, FILTER_FAVORITE } from "../constants";

const favorite = (state = {}, {type, payload}) => {
  switch (type) {
    case SET_FAVORITE:
      return{
        ...state,
        ...payload
      }
    case FILTER_FAVORITE :
        return {
          ...payload
        }
      default: return state;
  }
};

export default favorite;