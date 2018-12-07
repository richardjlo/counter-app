const initialState = [];

export const counterReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'ADD_COUNTER':
      return [...state, 0];     // same as `return state.concat(0);`
    case 'INCREMENT': 
      return [
        ...state.slice(0, action.index),    // Part of array before index
        state[action.index] + 1,            // Incremented value at index
        ...state.slice(action.index + 1),   // Part of array after index
      ]
    case 'DECREMENT':
    return [
      ...state.slice(0, action.index),    // Part of array before index
      state[action.index] - 1,            // Decremented value at index
      ...state.slice(action.index + 1),   // Part of array after index
    ]    
    case 'DELETE_COUNTER':
      return [
        ...state.slice(0, action.index),  // Get part of array before index
        ...state.slice(action.index + 1)    // Get part of array afert index
      ];
    default:
      return state;
  }
};
