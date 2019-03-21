const initialState = {
  isFetching: false,
  counters: {},
};

export const counterReducer = (state = initialState, action) => {  
  const {
    type,
    status,
    response,
    id,
  } = action;
  
  switch(type) {
    case 'CREATE_COUNTER': 
      if(status === 'success') {
        return Object.assign(
          {},
          state,
          {
            isFetching: false,
            counters: {
              ...state.counters,
              ...response,
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
      if(status === 'success') {
        return Object.assign(
          {},
          state,
          {
            isFetching: false,
            counters: {
              ...state.counters,
              ...response,
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
      if(status === 'success') {
        const counters = Object.assign({}, state.counters);   // Create new counters list
        delete counters[id];                           // Delete counter from counters list
        return({
          ...state,
          isFetching: false,
          counters: counters,
        });
      } else {
        return({
          ...state,
          isFetching: true,        
        });
      }
    case 'INCREMENT': 
    if(status === 'success') {
      return({
        ...state,
        isFetching: false,
        counters: {
          ...state.counters,
          ...response,
        }
      });
    } else {
      return({
        ...state,
        isFetching: true,
      });
    }
    case 'DECREMENT':
      if(status === 'success') {
        return({
          ...state,
          isFetching: false,
          counters: {
            ...state.counters,                            // Copy counters
            [id]: {                                // Update specific counter
              ...state.counters[id],               // copy counter properties
              value: state.counters[id].value -1,  // Update value
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