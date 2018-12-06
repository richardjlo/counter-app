const initialState = [];

export const addCounterReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'ADD_COUNTER':
      const newState = state.concat(0);
      return newState;
    case 'INCREMENT': 
      let newState2 = state.slice();
      let value = newState2[action.index];
      newState2[action.index] = value + 1;
      return(newState2);
    default:
      return state;
  }
};
