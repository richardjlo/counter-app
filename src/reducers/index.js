/*
 * Counter Reducer
 */ 

export const counterReducer = (state = { count: 0 }, action) => {
  if(action.type === 'INCREMENT') {
    return({
      count: state.count + 1,
    });
  } else if(action.type === 'DECREMENT') {
    return({
      count: state.count -1,
    });
  } else {
    return state;
  }
};