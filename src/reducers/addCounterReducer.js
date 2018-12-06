const initialState = [];

export const addCounterReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'ADD_COUNTER':
      const newState = state.concat(0);
      return newState;
    default:
      return state;
  }
};
