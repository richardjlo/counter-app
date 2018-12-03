import React from 'react';
import ReactDOM from 'react-dom';
import { counterReducer } from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './containers/CounterApp';

const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CounterApp />
    </Provider>, 
    document.getElementById('root')
  );
};

render();
store.subscribe(render);