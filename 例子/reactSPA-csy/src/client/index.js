import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';
import { createStore, applyMiddleware } from 'redux'
import routes from '../common/routes';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import './index.less';

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()))

ReactDOM.render(
    <Provider store={store}>
        { routes }
    </Provider>,
    document.getElementById('root')
);