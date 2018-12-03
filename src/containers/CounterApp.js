import React from 'react';
import { Counter } from '../components/Counter';
import { increment, decrement } from '../actions/actions';
import { connect } from "react-redux";

export const CounterApp = () => {
  return(
    <Counter 
      // count={store.getState().count}
      // onIncrement={() => {store.dispatch(increment())}}
      // onDecrement={() => {store.dispatch(decrement())}}
    />      
  );
};