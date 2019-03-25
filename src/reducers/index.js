const initialState = {
  isFetching: false,
  counters: [],
};


const getIndex = (counters, id) => {
  for(let i = 0; i < counters.length; i++) {
    if (counters[i].id === id) {
      return i;
    }
  };
}
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
          counters: [
            ...state.counters,
            response,
          ]
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
          counters: [
            ...response,
          ]
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
        const indexToDelete = getIndex(state.counters, id);

        return({
          ...state,
          isFetching: false,
          counters: [
            ...state.counters.slice(0, indexToDelete),
            ...state.counters.slice(indexToDelete + 1)
          ],
        });
      } else if(status === 'error') {
          return({
            ...state,
            isFetching:false,
            error: {
              code: "INVALID DELETE COUNTER ACTION",
              message: "Oops something went wrong",
            },
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
        counters: [
          {
            created: 1552892019,
            value: 1,
            id: 'b9mY8KQy2p4FIb7MJ5LP',
          },          
        ]
      });
    } else if(status === 'error') {
      return({
        ...state,
        isFetching:false,
        error: {
          code: "INVALID INCREMENT ACTION",
          message: "Oops something went wrong",
        },
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
      } else if(status === 'error') {
        return({
          ...state,
          isFetching:false,
          error: {
            code: "INVALID DECREMENT ACTION",
            message: "Oops something went wrong",
          },
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