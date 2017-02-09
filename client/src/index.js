import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import '../style/index.less';
import Paper from './container/index';
import rootReducer from './reducer/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
render(
  <Provider store={store}>
    <Paper/>
  </Provider>,
  document.getElementById('app')
);
