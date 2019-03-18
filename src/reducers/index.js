const counter1_id = 'b9mY8KQy2p4FIb7MJ5LP';
const counter2_id = 'uB3LUWoA8tsdxDzTq0Py';
const counter3_id = 'uB3LUWoA8tsdxDzTq3xm';

const initialState = {
  isFetching: false,
  counters: {
    [counter1_id]: {
      value: 1,
    },
    [counter2_id]: {
      value: 2,
    },
    [counter3_id]: {
      value: 3,
    }
  }
};

export const counterReducer = (state = initialState, action) => {  
  switch(action.type) {
      case 'CREATE_COUNTER': 
        if(action.status === 'success') {
          return Object.assign(
            {},
            state,
            {
              isFetching: false,
              counters: {
                ...state.counters,
                [action.response]: {value: 0 },
              }
            }
          );
        } else {
          return Object.assign(
            {},
            state,
            {
              isFetching: true,
            }
          );
        }        
    default:
      return state;
  }  
};


// export const counterReducer = (state = initialState, action) => {
//   switch(action.type) { 
//     case 'ADD_COUNTER':
//       return [...state, 0];     // same as `return state.concat(0);`
//     case 'INCREMENT': 
//       return [
//         ...state.slice(0, action.index),    // Part of array before index
//         state[action.index] + 1,            // Incremented value at index
//         ...state.slice(action.index + 1),   // Part of array after index
//       ]
//     case 'DECREMENT':
//     return [
//       ...state.slice(0, action.index),    // Part of array before index
//       state[action.index] - 1,            // Decremented value at index
//       ...state.slice(action.index + 1),   // Part of array after index
//     ]    
//     case 'DELETE_COUNTER':
//       return [
//         ...state.slice(0, action.index),  // Get part of array before index
//         ...state.slice(action.index + 1)    // Get part of array afert index
//       ];
//     default:
//       return state;
//   }
// };
