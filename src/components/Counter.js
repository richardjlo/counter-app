import React from 'react';

/*
 * Presentational component for adding a single counter to the DOM
 */
export const Counter = (props) => { 
  const { 
    count, 
    onIncrement, 
    onDecrement, 
    onDelete, 
  } = props;
  return(
    <React.Fragment>
      <p>
        Clicked: {count} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>  
        {' '}
        <button onClick={onDelete}>Delete</button> 
      </p>
    </React.Fragment>
  );
};