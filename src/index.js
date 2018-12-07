import React from 'react';
import ReactDOM from 'react-dom';
import { counterReducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterAppContainer from './containers/CounterAppContainer';

const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CounterAppContainer />
    </Provider>,
    document.getElementById('root')
  );
};

render();
