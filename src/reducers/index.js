/*
 * Counter Reducer
 */ 

export const counterReducer = (state, action) => {
  if(action.type === 'INCREMENT') {
    return({
      count: state.count + 1,
    });
  }
};