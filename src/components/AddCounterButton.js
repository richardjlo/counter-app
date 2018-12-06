import React from 'react';

export const AddCounterButton = (props) => {
  const {onAddCounter} = props;
  return(
    <button
      onClick={onAddCounter}
    >
      Add Counter
    </button>
  );
};