import React from 'react';
import { Counter } from '../components/Counter';
import { increment, decrement } from '../actions/actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const CounterApp = (props) => {
  const { count, handleIncrement, handleDecrement } = props;
  return(
    <Counter 
      count={count}
      onIncrement={() => {handleIncrement()}}
      onDecrement={() => {handleDecrement()}}
    />      
  );
};

function mapStateToProps(state) {
  return ({
    count: state.count,
  });
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(
      {
        handleIncrement: increment,
        handleDecrement: decrement,
      }, 
    dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);