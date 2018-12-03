import React from 'react';
import { Counter } from '../components/Counter';
import { increment, decrement } from '../actions/actions';
import { connect } from "react-redux";

const CounterApp = (props) => {
  return(
    <Counter 
      count={props.count}
      onIncrement={props.handleIncrement()}
      OnDecrement={props.handleDecrement()}
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

function mapDispatchToProps() {
  return({
    handleIncrement: increment,
    handleDecrement: decrement,
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);