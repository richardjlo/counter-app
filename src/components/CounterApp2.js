import React from 'react';
import { Counter } from './Counter';

/*
 * Presentational component that adds one or more counters to the DOM
 */

export const CounterApp = (props) => {
  const { count, handleIncrement, handleDecrement } = props;
  return(
    <Counter 
      count={count}
      onIncrement={() => {handleIncrement()}}
      onDecrement={() => {handleDecrement()}}
    />      
  );
};