import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_HOTELS } from '../constants';
import { getHotels } from '../../api/index';
import { setHotels } from '../actions/actionCreator';

// export function* handleHotels() {
//   const data = yield getHotels();
//   yield put(setHotels(data.results.locations))
// }

export function* handleHotels() {
  const data = yield call(getHotels, 'moscow');
  yield put(setHotels(data.results.locations))
}

export function* watchClickSaga() {
  yield takeLatest(GET_HOTELS, handleHotels);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
