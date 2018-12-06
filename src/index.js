import React from 'react';
import ReactDOM from 'react-dom';
import { addCounterReducer } from './reducers/addCounterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './containers/CounterApp';

const store = createStore(addCounterReducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CounterApp />
    </Provider>,
    document.getElementById('root')
  );
};

render();
