import React from 'react';
import { Counter } from './Counter';

/*
 * Presentational component that adds one or more counters to the DOM
 */

export const CounterApp = (props) => {
  const { countersList, handleAddCounterButton, handleIncrement, handleDecrement, handleDeleteCounterButton } = props;
  const counters = countersList.map( (obj, index) => {
    return (
      <Counter
        key={index}
        count = {obj}
        onIncrement={() => {handleIncrement(index)}}
        onDecrement={() => {handleDecrement(index)}}
        onDelete={() => {handleDeleteCounterButton(index)}}
      />
    );
  });

  return(
    <div>
      {counters}
      <hr />
      <button
        onClick={() => {handleAddCounterButton()}}
      >
        Add Counter
      </button>
    </div>    
  );
};