import { CounterApp } from '../components/CounterApp';
import { increment, decrement } from '../actions/actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/*
 * Turns CounterApp into a container component by calling connect() on it.
 * By calling connect(), we are able to pass the state and event handlers 
 * as props to CounterApp component.
 */

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