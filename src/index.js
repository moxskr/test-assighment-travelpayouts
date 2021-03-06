import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.sass';
import App from "./containers/App";
import store from './store';
import {Provider} from 'react-redux';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
