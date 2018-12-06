const defaultState = [];

export const addCounterReducer = (state = defaultState, action) => {
  if(action.type === 'ADD_COUNTER') {
    const newState = state.concat(0);
    return newState;
  } else {
    return defaultState;
  }  
};