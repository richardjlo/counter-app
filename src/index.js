import React from 'react';
import ReactDOM from 'react-dom';
import { counterReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { CounterAppContainer } from './containers/CounterAppContainer';
import logger from 'redux-logger';

const middleWare = [];
middleWare.push(thunk);
middleWare.push(logger);

const store = createStore(
  counterReducer,
  applyMiddleware(...middleWare)
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CounterAppContainer />
    </Provider>,
    document.getElementById('root')
  );
};

render();
