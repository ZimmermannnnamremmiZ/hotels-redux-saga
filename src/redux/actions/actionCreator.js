import { GET_HOTELS, SET_HOTELS } from "../constants";

export const getHotels = () => ({
  type: GET_HOTELS,
});

export const setHotels = (payload) => ({
  type: SET_HOTELS,
  payload,
});