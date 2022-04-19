import { GET_HOTELS, SET_HOTELS, SET_SEARCH_DATA, SET_FAVORITE, FILTER_FAVORITE} from "../constants";

export const getHotels = () => ({
  type: GET_HOTELS,
});

export const setHotels = (payload) => ({
  type: SET_HOTELS,
  payload
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
});

export const setSearchData = (payload) => ({
  type: SET_SEARCH_DATA,
  payload
});

export const setFiltered = (payload) => ({
  type: FILTER_FAVORITE,
  payload
})
