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
        return({
          ...state,
          isFetching: false,
          counters: {
            ...state.counters,
            ...response,
          }
        });
      } else if(status === 'error') {
        return({
          ...state,
          isFetching:false,
          error: {
            code: "INVALID CREATE COUNTER ACTION",
            message: "Oops something went wrong",
          },
        });
      } else {
        return({
          ...state,
          isFetching: true,
        });
      }
    case 'FETCH_COUNTERS':
      if(status === 'success') {
        return({
          ...state,
          isFetching: false,
          counters: {
            ...response,
          }
        });
      } else if(status === 'error') {
        return({
          ...state,
          isFetching:false,
          error: {
            code: "INVALID FETCH COUNTERS ACTION",
            message: "Oops something went wrong",
          },
        });
      } else {
        return({
          ...state,
          isFetching: true,  
        });
      }
    case 'DELETE_COUNTER':
      if(status === 'success') {
        const counters = {                // Create new counters list
          ...state.counters,
        }
        delete counters[id];              // Delete counter from counters list
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
    default:
      return state;
  }  
};