const initialState = [];

export const counterReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'ADD_COUNTER':
      return [...state, 0];     // same as `return state.concat(0);`
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
    case 'DELETE_COUNTER':
      const front = state.slice(0, action.index);
      const end = state.slice(action.index + 1);
      return front.concat(end);
    default:
      return state;
  }
};
