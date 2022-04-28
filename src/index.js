import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

// firebase для функционала авторизации
const firebaseConfig = {
  apiKey: "AIzaSyBtZr1y9EQuaKCB7LzeCG1mt4Hj-eM2OzU",
  authDomain: "hotels-redux-saga.firebaseapp.com",
  projectId: "hotels-redux-saga",
  storageBucket: "hotels-redux-saga.appspot.com",
  messagingSenderId: "875866179492",
  appId: "1:875866179492:web:d2ac6b4e5378c9e581e331",
  measurementId: "G-6H8ZGGQSJN"
};


// для FindHotelsForm
Date.prototype.addDays = function(days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
