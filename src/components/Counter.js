import React from 'react';

export const Counter = () => { 
  return(
    <React.Fragment>
      <p>
        Clicked: 0 times
        {' '}
        <button>+</button>
        {' '}
        <button>-</button>  
      </p>
    </React.Fragment>
  );
};