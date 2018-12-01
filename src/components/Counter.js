import React from 'react';

export const Counter = (props) => { 
  const { count, onIncrement, onDecrement } = props;
  return(
    <React.Fragment>
      <p>
        Clicked: {count} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>  
      </p>
    </React.Fragment>
  );
};