import { GET_HOTELS, SET_HOTELS, SET_SEARCH_DATA } from "../constants";

export const getHotels = () => ({
  type: GET_HOTELS,
});

export const setHotels = (payload) => ({
  type: SET_HOTELS,
  payload,
});

export const setSearchData = (payload) => ({
  type: SET_SEARCH_DATA,
  payload,
});
