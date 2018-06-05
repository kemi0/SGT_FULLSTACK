import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { creatStore } from 'react-redux';
import rootReducer from './reducers'


import App from './components/app';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,
    document.getElementById('root')
);
