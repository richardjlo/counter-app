import React from 'react';

export const Counter = (props) => { 
  const { count } = props;
  return(
    <React.Fragment>
      <p>
        Clicked: {count} times
        {' '}
        <button>+</button>
        {' '}
        <button>-</button>  
      </p>
    </React.Fragment>
  );
};