/*
 * Action Creators - addCounter, increment, decrement
 */

export const addCounter = () => {
  return({
    type: 'ADD_COUNTER',
  });  
};

export const deleteCounter = (i) => {
  return({
    type: 'DELETE_COUNTER',
  });
};

export const increment = (i) => {
  return({
    index: i,
    type: 'INCREMENT',
  });  
};

export const decrement = (i) => {
  return({
    index: i,
    type: 'DECREMENT',
  });  
};
