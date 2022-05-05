import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';


import App from './App';
import store from './redux/store';

import './style/index.scss';

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

