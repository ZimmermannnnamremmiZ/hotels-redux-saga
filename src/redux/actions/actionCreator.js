import { GET_HOTELS, SET_HOTELS, SET_REQUEST } from "../constants";

export const getHotels = () => ({
  type: GET_HOTELS,
});

export const setHotels = (payload) => ({
  type: SET_HOTELS,
  payload,
});


// export const setRequest = (payload) => ({
//   type: SET_REQUEST,
//   payload,
// });
