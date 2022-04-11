import { takeLatest, put, call, select } from 'redux-saga/effects';
import { GET_LOCATION, GET_HOTELS } from '../constants';
import { getLocation, getHotels } from '../../api/index';
import { setLocation, setHotels } from '../actions/actionCreator';

// export function* handleHotels() {
//   const data = yield getHotels();
//   yield put(setHotels(data.results.locations))
// }

export function* handleHotels() {
  const city = yield select(({searchData}) => searchData.city)
  const checkIn = yield select(({searchData}) => searchData.checkIn)
  const checkOut = yield select(({searchData}) => searchData.checkOut)
  // const days = yield select(({searchData}) => `${searchData.days}`)
  const hotels = yield call(getHotels, city, checkIn, checkOut); // call - блокирующий эффект (fork - неблокирующий)
  // const id = yield locationData?.results?.locations[0].id
  yield put(setHotels(hotels))
  // const hotelsData = yield call(getHotels, id, '2022-04-22', '2022-04-30');
  // yield put(setHotels(hotelsData))
}

export function* watchClickSaga() {
  yield takeLatest(GET_LOCATION, handleHotels);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
