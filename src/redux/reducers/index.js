import { combineReducers } from 'redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import searchData from './searchData';
import hotels from './hotels';
import favorite from './favorite';

// firebase для функционала авторизации
firebase.initializeApp({
  apiKey: "AIzaSyBtZr1y9EQuaKCB7LzeCG1mt4Hj-eM2OzU",
  authDomain: "hotels-redux-saga.firebaseapp.com",
  projectId: "hotels-redux-saga",
  storageBucket: "hotels-redux-saga.appspot.com",
  messagingSenderId: "875866179492",
  appId: "1:875866179492:web:d2ac6b4e5378c9e581e331",
  measurementId: "G-6H8ZGGQSJN"
});

const auth = () => firebase.auth()
const firestore = () => firebase.firestore()

const reducer = combineReducers({
  firebase,
  auth,
  firestore,
  hotels,
  favorite,
  searchData
});

export default reducer;
