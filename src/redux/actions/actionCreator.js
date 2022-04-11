import { GET_LOCATION, GET_HOTELS, SET_LOCATION, SET_HOTELS, SET_SEARCH_DATA } from "../constants";

export const getLocation = () => ({
  type: GET_LOCATION,
});

export const setLocation = (payload) => ({
  type: SET_LOCATION,
  payload,
});

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
