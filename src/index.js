import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'

import countriesReducer from "./store/reducers/countries";
import countryReducer from './store/reducers/country';

const rootReducer = combineReducers({
  country:countryReducer,
  countriesData:countriesReducer
})
// const store = createStore(countriesReducer) //it will b used to only one reducer and below one will be used to multible reducer
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    
    <App />
   
    </BrowserRouter>
  </React.StrictMode>
   </Provider>
);
