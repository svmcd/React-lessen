import React from 'react';
import ReactDOM from 'react-dom/client';

import {createStore} from "redux";
  
import {Provider} from "react-redux"

import './index.scss';
import App from './app/App.jsx';
import reducers from "./reducers/reducers"

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
