import React from 'react';
import ReactDOM from 'react-dom';
import { addCounterReducer } from './reducers/addCounterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterAppMultiple from './containers/CounterAppMultiple';

const store = createStore(addCounterReducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CounterAppMultiple />
    </Provider>,
    document.getElementById('root')
  );
};

render();
