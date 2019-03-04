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
    index: i,
    type: 'DELETE_COUNTER',
  });
};

export const increment = (i) => {
  return({
    index: i,
    type: 'INCREMENT',
  });  
};

export const asyncIncrement = (i) => {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment(i));
    }, 1000);
  };
};

export const decrement = (i) => {
  return({
    index: i,
    type: 'DECREMENT',
  });  
};
