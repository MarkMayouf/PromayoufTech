import React from 'react';
import  ReactDOM  from 'react-dom';
import "./bootstrap.min.css"
import "./index.css"
import App from './App';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


