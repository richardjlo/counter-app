const initialState = [];

export const counterReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'ADD_COUNTER':
      const newState = state.concat(0);
      return newState;
    case 'INCREMENT': 
      let newState2 = state.slice();
      let value = newState2[action.index];
      newState2[action.index] = value + 1;
      return(newState2);
    case 'DECREMENT':
      let newState3 = state.slice();
      let value1 = newState3[action.index];
      newState3[action.index] = value1 - 1;
      return newState3;
    default:
      return state;
  }
};
