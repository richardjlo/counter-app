const initialState = {
  isFetching: false,
  counters: {},
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
              ...action.response,
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
    case 'FETCH_COUNTERS':
      if(action.status === 'success') {
        return Object.assign(
          {},
          state,
          {
            isFetching: false,
            counters: {
              ...state.counters,
              ...action.response,
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
    case 'DELETE_COUNTER':
      if(action.status === 'success') {
        return({
          ...state,
          isFetching: false,
          counters: action.response,
        });
      } else {
        return({
          ...state,
          isFetching: true,        
        });
      }
    case 'INCREMENT': 
    if(action.status === 'success') {
      return({
        ...state,
        isFetching: false,
        counters: action.response,
      });
    } else {
      return({
        ...state,
        isFetching: true,
      });
    }
    case 'DECREMENT':
      if(action.status === 'success') {
        return Object.assign(
          {},
          state,
          {
            isFetching: false,
            counters: {
              ...state.counters,
              [action.id]: {
                ...state.counters[action.id], // copy counter properties
               value: state.counters[action.id].value -1, // Update value
              }
            }
          }
        );
      } else {
        return({
          ...state, 
          isFetching: true,
        });
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
