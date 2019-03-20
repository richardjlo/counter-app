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
        return({
          ...state,
          isFetching: false,
          counters: {
            ...state.counters,                            // Copy counters
            [action.id]: {                                // Update specific counter
              ...state.counters[action.id],               // copy counter properties
              value: state.counters[action.id].value -1,  // Update value
            },
          }
        });
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