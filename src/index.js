import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './components/Counter';
import { counterReducer } from './reducers/index';
import { increment, decrement } from './actions/actions';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { connect } from "react-redux";

const CounterApp = () => {
  return(
    <Counter 
      count={store.getState().count}
      onIncrement={() => {store.dispatch(increment())}}
      onDecrement={() => {store.dispatch(decrement())}}
    />      
  );
};

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