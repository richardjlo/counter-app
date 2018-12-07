const initialState = [];

export const counterReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'ADD_COUNTER':
      return [...state, 0];     // same as `return state.concat(0);`
    case 'INCREMENT': 
      let before = state.slice(0, action.index);
      let value = state[action.index] + 1;
      let after = state.slice(action.index + 1);

      return before
        .concat(value)
        .concat(after);
    case 'DECREMENT':
      let newState3 = state.slice();
      let value1 = newState3[action.index];
      newState3[action.index] = value1 - 1;
      return newState3;
    case 'DELETE_COUNTER':
      return [
        ...state.slice(0, action.index), 
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};
