import React from 'react';
import { Counter } from './Counter';
import { AddCounterButton } from './AddCounterButton';

/*
 * Presentational component that adds one or more counters to the DOM
 */

export const CounterAppMultiple = (props) => {
  const { countersList, handleAddCounterButton, handleIncrement, handleDecrement } = props;
  const counters = countersList.map( (obj, index) => {
    return (
      <Counter
        key={index}
        count = {obj}
        onIncrement={() => {handleIncrement(index)}}
        onDecrement={() => {handleDecrement(index)}}
      />
    );
  });

  return(
    <div>
      {counters}
      <hr />
      <AddCounterButton 
        onAddCounter={() => {handleAddCounterButton()}}
      />
    </div>    
  );
};