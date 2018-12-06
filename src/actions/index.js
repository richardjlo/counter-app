/*
 * Action Creators - 'ADD_COUNTER'
 */

export const addCounter = () => {
  return({
    type: 'ADD_COUNTER',
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
