import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import setEmployeeReducer from './reducers/employee';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from './reducers/snackbar';

export const store = configureStore({
  reducer: {
    setEmployeeReducer,
    snackbarReducer}

})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


export type RootState = ReturnType<typeof store.getState>