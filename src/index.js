import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';


import charactersReducer from './reducers/index'

const store = createStore(charactersReducer);
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,

    document.getElementById('root'));
