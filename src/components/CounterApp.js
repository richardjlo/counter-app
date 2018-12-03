import React from 'react';
import { Counter } from './Counter';

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