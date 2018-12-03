import React from 'react';
import { Counter } from '../components/Counter';
import { increment, decrement } from '../actions/actions';
import { connect } from "react-redux";

const CounterApp = (props) => {
  console.log(props);
  return(
    <Counter 
      count={props.count}
      // count={store.getState().count}
      // onIncrement={() => {store.dispatch(increment())}}
      // onDecrement={() => {store.dispatch(decrement())}}
    />      
  );
};

function mapStateToProps(state) {
  return ({
    count: state.count,
  });
}

export default connect(mapStateToProps)(CounterApp);