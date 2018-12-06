import React from 'react';
import { Counter } from './Counter';
import { AddCounterButton } from './AddCounterButton';

/*
 * Presentational component that adds one or more counters to the DOM
 */

export const CounterAppMultiple = (props) => {
  const { countersList } = props;
  const counters = countersList.map( (obj, index) => {
    return (
      <Counter
        key={index}
        counter = {obj}
        // onIncrement={() => {handleIncrement()}}
        // onDecrement={() => {handleDecrement()}}        
      />
    );
  });

  return(
    <div>
      {counters}
      <AddCounterButton />
    </div>    
  );
};