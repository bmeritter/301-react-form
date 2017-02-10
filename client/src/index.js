import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import '../style/index.less';
import Paper from './container/app';
import rootReducer from './reducer/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

render(
  <Provider store={store}>
    <Paper/>
  </Provider>,
  document.getElementById('app')
);
