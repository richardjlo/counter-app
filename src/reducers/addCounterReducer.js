const defaultState = [];

export const addCounterReducer = (state = defaultState, action) => {
  if(action.type === 'ADD_COUNTER') {
    return ([0]);
  } else {
    return defaultState;
  }  
};