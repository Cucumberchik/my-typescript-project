import React from "react"
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  root
);

