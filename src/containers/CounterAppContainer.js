import { CounterApp } from '../components/CounterApp';
import { 
  createCounter,
  increment, 
  decrement, 
  deleteCounter, 
  fetchCounters,
} from '../actions/index';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/*
 * Turns CounterApp into a container component by calling connect() on it.
 * By calling connect(), we are able to pass the state and event handlers 
 * as props to CounterApp component.
 */

function mapStateToProps(state) {
  return ({
    state: state,
  });
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(
      {
        handleAddCounterButton: createCounter,
        fetchCounters: fetchCounters,
        handleIncrement: increment,
        handleDecrement: decrement,
        handleDeleteCounterButton: deleteCounter,
      }, 
    dispatch)
  );
}

export const CounterAppContainer = connect(mapStateToProps, mapDispatchToProps)(CounterApp);