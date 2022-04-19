import { takeLatest, put, call, select } from 'redux-saga/effects';
import { GET_HOTELS } from '../constants';
import { getHotels } from '../../api/index';
import { setHotels } from '../actions/actionCreator';
import dateApiFormat from '../../auxiliary_fn/date_api';

export function* handleHotels() {
  const {city, checkIn, checkOut} = yield select(({searchData}) => searchData)
  const hotels = yield call(getHotels, city, dateApiFormat(checkIn), dateApiFormat(checkOut)); // call - блокирующий эффект (fork - неблокирующий)
  yield put(setHotels(hotels.map(el => {
    el.isActive = false;
    return el
  })))
}

export function* watchClickSaga() {
  yield takeLatest(GET_HOTELS, handleHotels);
}

export default function* rootSaga() {
  yield watchClickSaga();
}