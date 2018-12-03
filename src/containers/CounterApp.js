import React from 'react';
import { Counter } from '../components/Counter';
import { increment, decrement } from '../actions/actions';
import { connect } from "react-redux";

const CounterApp = () => {
  return(
    <Counter 
      count={111}
      // count={store.getState().count}
      // onIncrement={() => {store.dispatch(increment())}}
      // onDecrement={() => {store.dispatch(decrement())}}
    />      
  );
};

function mapStateToProps(state) {
  return state.count;
}

export default connect(mapStateToProps)(CounterApp);